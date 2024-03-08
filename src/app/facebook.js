const puppeteer = require('puppeteer')
const path = require('path')
const fs = require('fs')

const run = async (url, name = Date.now()) => {
  if (!url) return

  console.log('run', { url, name })

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })

  const page = await browser.newPage()
  await page.setViewport({ width: 1080, height: 1024 })
  await page.setDefaultNavigationTimeout(0)
  await page.goto(url)
  await page.waitForTimeout(10 * 1000)
  // e-mail
  const emailSelector = '#email'
  await page.waitForSelector(emailSelector)
  await page.type(emailSelector, 'mail@mail.com')
  // pass
  const passSelector = '#pass'
  await page.waitForSelector(passSelector)
  await page.type(passSelector, 'mail@mail.com')
  await page.screenshot({ path: name + '.png', fullPage: true })
  await browser.close()
}

run('https://web.facebook.com/', 'facebook')
