import { mkdirSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'

mkdirSync('public/images', { recursive: true })

const assets = {
  'logo.png':
    'https://lh3.googleusercontent.com/aida/AEtjO1Xry-R8TarxyPUduSl5JZ4yHiIvLrCrErVrsgpwE0mfBAy1IILJ1TQ3Rf5Kx217P4wGVeUVEsTm3kC6Bl55t7yycNujNCUaW4otY8607qphDGpz6p1tdlmyOK_4WiRsKhM9EF_OhJnKZReZ4V-QhYCEFPcxwLxaT48td9f1D0Ad9Y4cdCVNNiqT4MYcIoMIWXuZ_dPE8pm-7BPXBuMPtLioV_9NiyN4TgEHZWtT_bmE3iIq2i5SzLt-c4l',
}

const logo =
  'https://lh3.googleusercontent.com/aida/AEtjO1Xry-R8TarxyPUduSl5JZ4yHiIvLrCrErVrsgpwE0mfBAy1IILJ1TQ3Rf5Kx217P4wGVeUVEsTm3kC6Bl55t7yycNujNCUaW4otY8607qphDGpz6p1tdlmyOK_4WiRsKhM9EF_OhJnKZReZ4V-QhYCEFPcxwLxaT48td9f1D0Ad9Y4cdCVNNiqTq4MYcIoMIWXuZ_dPE8pm-7BPXBuMPtLioV_9NiyN4TgEHZWtT_bmE3iIq2i5SzLt-c4l'

const res = await fetch(logo)
console.log('logo status', res.status, res.headers.get('content-type'), res.headers.get('content-length'))
const buf = Buffer.from(await res.arrayBuffer())
writeFileSync('public/images/logo.png', buf)
console.log('wrote', buf.length)
