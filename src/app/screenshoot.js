const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

const args = ['--no-sandbox', '--disable-setuid-sandbox']

const filename = path.resolve(__dirname, 'urls.txt')

const getFileLines = () => fs.readFileSync(filename).toString().split(/\r?\n/ig)

const run = async (url, name = Date.now()) => {
  if (!url) return

  console.log('run', { url, name })

  const browser = await puppeteer.launch({ args })

  const page = await browser.newPage()
  await page.setViewport({ width: 1080, height: 1024 })
  await page.setDefaultNavigationTimeout(0)
  await page.goto(url)
  await page.waitForTimeout(30 * 1000)
  await page.screenshot({ path: name + '.png', fullPage: true })

  await browser.close()
}

getFileLines().map((line) => line.split(' '))
  .map(async ([url, name]) => await run(url, name))
