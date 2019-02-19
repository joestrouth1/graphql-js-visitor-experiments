//@ts-check
const fs = require('fs')
const graphql = require('graphql')

const schema = `
type Query {
  products(first: Int): [Product]
}
type Product {
  id: ID!
  name: String!
}
`
const request = `
query {
  products(first: 1) {
    id
    name
  }
}
`
const testProducts = [{ id: 1, name: 'Sample Product' }, { id: 2, name: 'Sample Product' }]

const source = new graphql.Source(schema, 'testQuery')
const builtSchema = graphql.buildSchema(source)
const root = {
  products({ first }, _, info) {
    // console.dir(info.operation.selectionSet.selections[0].selectionSet.selections[0], { depth: 3 })
    graphql.visit(info.operation.selectionSet, {
      enter: {
        Field(node, index) {
          console.log('entering field: ', { node, index })
        },
        Argument(node, index) {
          console.log('entering argument: ', { node, index })
        },
        SelectionSet(node) {
          console.log('entering SelectionSet: ', { node })
        },
        Query(node) {
          console.log('entering query: ', { node })
        }
      },
      leave: {
        Field(node, index) {
          console.log('leaving field: ', { node, index })
        },
        Argument(node, index) {
          console.log('leaving argument: ', { node, index })
        }
      }
    })
    return (first && testProducts.slice(0, first)) || testProducts
  }
}
graphql.graphql(builtSchema, request, root).then(res => console.log(res.data && res.data.products)).catch(console.error)


// const parsed = graphql.parse(source)
// const astSchema = graphql.buildASTSchema(parsed)
// graphql.visit(parsed, {
//   enter(node) {
//     console.log('Entering node: \n', {node})
//   }
// })

// fs.writeFileSync(__dirname + '/parsedQuery.js', JSON.stringify(parsed, null, 2), {encoding: 'utf8'})

// console.dir(parsed, { depth: 4 })
