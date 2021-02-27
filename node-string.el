;;; package --- node-string
;;; Commentary:
;;; Code:

(defun node-string/object-to-json (&optional b e)
  "Object to Json."
  (interactive "r")
  (call-process-region b e "node-string-commands" t t nil "object-to-json"))

(provide 'node-string)
;;; node-string.el ends here
