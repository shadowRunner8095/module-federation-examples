//@ts-check

/**
 * @type {{default: typeof import('@module-federation/enhanced/runtime')}}
 * 
 */
// @ts-expect-error
const { default: {createInstance}}= await import('http://localhost:3000/mf-bundle.js')

const mfInstance = createInstance({
    name: 'consumer',
    remotes: [
        {
            entry: 'http://localhost:3001/mf-manifest.json',
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