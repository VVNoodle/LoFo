import Vue from 'vue'
// import Index from '@/components/home/SubmissionForm/Index'
import GMap from '@/components/home/GMap'

describe('GMap.vue', () => {
  it('checks that the submission form starts closed', () => {
    // const IndexConstructor = Vue.extend(Index)
    const Constructor = Vue.extend(GMap)
    // const IndexComponent = new IndexConstructor().$mount()
    const GMapComponent = new Constructor().$mount()
    // console.log('**********')
    // console.log(GMapComponent)
    // console.log(IndexComponent.submissionDialog)
    expect(GMapComponent.submissionDialog).to.equal(false)
  })

  it('prevents markers being created outside the boundaries of UCSC', () => {
    const Constructor = Vue.extend(GMap)
    const GMapComponent = new Constructor().$mount()
    console.log('**********')
    // console.log(GMapComponent)
    console.log(GMapComponent.$parent.getMap)
  })

  // Geoff's lame test
  it('checks that the map is centered properly when the webpage is refreshed', () => {
    const Constructor = Vue.extend(GMap)
    const GMapComponent = new Constructor().$mount()
    expect(GMapComponent.center.lat).to.equal(36.994635)
    expect(GMapComponent.center.lng).to.equal(-122.058842)
  })
})
