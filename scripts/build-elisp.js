const Case = require('case');
const fs = require('fs');
const R = require('ramda');

const commands = R.pipe(
  R.map(filename => filename.replace(/\..*$/, '')),
  R.filter(filename => filename !== 'interface'),
  R.uniq
)(fs.readdirSync('src/commands'));

const elispProgram = body => `;;; package --- node-string
;;; Commentary:
;;; Code:
${body}

(provide 'node-string)
;;; node-string.el ends here
`;

const elispCommand = command => `
(defun node-string/${command} (&optional b e)
  "${Case.title(command)}."
  (interactive "r")
  (call-process-region b e "emacs-node-string" t t nil "${command}"))
`;

fs.writeFileSync('node-string.el', elispProgram(commands.map(elispCommand).join('')));
