/* globals cy*/

const stories = {
  card: '/story/card--with-image',
}

Given('I load the page {string}', async component => {
  const path = stories[component]
  if (!path) throw new Error('No story by that name')
  cy.visit(`http://localhost:6006/?path=${path}`)
})

Given('I load the page', () => {
  cy.visit('http://localhost:3000')
})
