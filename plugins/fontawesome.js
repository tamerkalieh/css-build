import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faTimes,
  faCode,
  faStar,
  faEnvelope,
  faPhoneAlt,
  faHandPeace,
  faDesktop,
  faPaintBrush,
  faCalendarTimes,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons'

import {
  faGoogle,
  faInstagram,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faBars,
  faTimes,
  faGoogle,
  faCode,
  faFacebookSquare,
  faInstagram,
  faStar,
  faEnvelope,
  faPhoneAlt,
  faHandPeace,
  faDesktop,
  faPaintBrush,
  faCalendarTimes,
  faArrowUp
)

config.autoAddCss = false

// eslint-disable-next-line vue/component-definition-name-casing
Vue.component('fa', FontAwesomeIcon)
