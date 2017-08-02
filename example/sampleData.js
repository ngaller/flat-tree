import faker from 'faker'

function generateSampleData() {
  const branches = {
    salesorders: generateItems([['arInvoices']]),
    purchaseOrders: generateItems([['apInvoices']]),
    jobs: generateItems([['elements', 'kits']])
  }
  return branches
}

function generateItems(subs) {
  const items = []
  for(let i=0; i < 5; i++) {
    const item = {
      id: i,
      title: faker.address.city() + ' - ' + faker.company.companyName() + ' - ' + faker.name.jobArea(),
    }
    if(subs.length) {
      item.branches = {}
      for(let v of subs) {
        item.branches[v[0]] = generateItems(v.slice(1))
      }
    }
    items.push(item)
  }
  return items
}

export function copyOneLevel(source) {
  const r = {}
  for(let k in source) {
    r[k] = source[k].map(item => ({...item, branches: undefined, loading: false}))
  }
  return r
}
export const sampleData = generateSampleData()
export const categoryLabels = {
  salesorders: 'Sales Orders',
  arInvoices: 'AR Invoices',
  purchaseOrders: 'Purchase Orders',
  jobs: 'Jobs',
  elements: 'Elements',
  kits: 'Kits',
}
