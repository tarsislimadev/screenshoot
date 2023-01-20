const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

const args = ['--no-sandbox', '--disable-setuid-sandbox']

const run = async (url, name = Date.now()) => {
  console.log('run',{ url, name })

  const browser = await puppeteer.launch({ args })

  const page = await browser.newPage()
  await page.setViewport({ width: 1080, height: 1024 })
  await page.goto(url)
  await page.screenshot({ path: name + '.png', fullPage: true })

  await browser.close()
}

const filename = path.resolve(__dirname, 'urls.txt')
const filetext = fs.readFileSync(filename).toString()

filetext.split(/\r?\n/ig)
  .map((line) => line.split(' '))
  .forEach(([name, url]) => run(url, name))
