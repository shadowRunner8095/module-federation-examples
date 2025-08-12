//@ts-check

const currentScript = document.currentScript ?? document.head.querySelector('script');
const dataset = currentScript ? currentScript.dataset : {};

const { env } = dataset


const mfBundleUrl = (env === 'production')
? '/module-federation-examples/mf-bundle.js'
: 'http://localhost:3000/mf-bundle.js';

/**
 * @type {{default: typeof import('@module-federation/enhanced/runtime')}}
 * 
 */
const { default: { createInstance } } = await import(mfBundleUrl)



const entry = env === 'production'
  ? '/module-federation-examples/provider/mf-manifest.json'
  : 'http://localhost:3001/mf-manifest.json';

const mfInstance = createInstance({
    name: 'consumer',
    remotes: [
        {
            entry,
            name: 'modal',
            alias: 'modal',
        }
    ],
})



/**
 * 
 * @this {Node}
 */
async function scrollListener(){
    const { createModal } = await mfInstance.loadRemote('modal')
    setTimeout(createModal, 500)
    this.removeEventListener('scroll', scrollListener)
}

addEventListener('scroll', scrollListener)

export {}