import Router from './Router'
import { on } from './utilities/dom'

on('DOMContendLoaded', new Router)
