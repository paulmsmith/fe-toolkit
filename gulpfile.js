'use strict'

const requireDir = require('require-dir')

// Require all tasks in gulp/tasks, including subfolders
requireDir('./lib/gulp', { recurse: true })
