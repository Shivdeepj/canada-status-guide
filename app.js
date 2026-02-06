/**
 * Canada Status Guide – permit expiry checker and situation-based message
 */

(function () {
  const expiryInput = document.getElementById('expiry-date');
  const checkBtn = document.getElementById('check-btn');
  const resultEl = document.getElementById('result');
  const resultContent = document.getElementById('result-content');

  if (!expiryInput || !checkBtn || !resultEl || !resultContent) return;

  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  const THIRTY_DAYS = 30;
  const NINETY_DAYS = 90;

  function parseDate(str) {
    if (!str) return null;
    const d = new Date(str);
    return isNaN(d.getTime()) ? null : d;
  }

  function daysBetween(from, to) {
    const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    const end = new Date(to.getFullYear(), to.getMonth(), to.getDate());
    return Math.round((end - start) / MS_PER_DAY);
  }

  function formatDate(d) {
    return d.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function showResult(html, statusClass) {
    resultContent.innerHTML = html;
    resultContent.className = 'result-status-' + statusClass;
    resultEl.hidden = false;
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function runCheck() {
    const expiryStr = expiryInput.value;
    const expiryDate = parseDate(expiryStr);

    if (!expiryDate) {
      showResult(
        '<p>Please enter a valid permit expiry date.</p>',
        'warning'
      );
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiryOnly = new Date(expiryDate.getFullYear(), expiryDate.getMonth(), expiryDate.getDate());
    const daysUntilExpiry = daysBetween(today, expiryOnly);
    const daysSinceExpiry = -daysUntilExpiry;

    if (daysUntilExpiry > THIRTY_DAYS) {
      showResult(
        '<h3>You have time – apply to extend before expiry</h3>' +
        '<p><strong>' + Math.abs(daysUntilExpiry) + ' days</strong> until your permit expires on ' + formatDate(expiryDate) + '.</p>' +
        '<p>You should <strong>apply to extend (or change) your permit at least 30 days before</strong> this date. If IRCC receives your application before your permit expires, you keep legal status and can usually continue working or studying until a decision.</p>' +
        '<ul><li>Set a reminder to apply by ' + formatDate(new Date(expiryOnly.getTime() - THIRTY_DAYS * MS_PER_DAY)) + '.</li><li>Gather documents and confirm with your employer (for work permits) if an LMIA or support letter is needed.</li></ul>',
        'good'
      );
      return;
    }

    if (daysUntilExpiry >= 0 && daysUntilExpiry <= THIRTY_DAYS) {
      showResult(
        '<h3>Apply to extend as soon as possible</h3>' +
        '<p>Your permit expires in <strong>' + daysUntilExpiry + ' days</strong> (' + formatDate(expiryDate) + '). You are in the window where you should apply immediately.</p>' +
        '<p>Submit your extension application <strong>before your permit expires</strong> (IRCC must receive it before midnight UTC on the expiry date). If you do, you maintain status and can usually keep working or studying while waiting.</p>' +
        '<ul><li>Apply online on the IRCC website as soon as you have all documents.</li><li>Keep your submission confirmation as proof you applied in time.</li></ul>',
        daysUntilExpiry <= 7 ? 'warning' : 'good'
      );
      return;
    }

    if (daysSinceExpiry > 0 && daysSinceExpiry <= NINETY_DAYS) {
      showResult(
        '<h3>Your permit has expired – you can still restore status</h3>' +
        '<p>Your permit expired <strong>' + daysSinceExpiry + ' days ago</strong> (' + formatDate(expiryDate) + '). You have up to <strong>90 days</strong> from the date it expired to apply to restore your status.</p>' +
        '<p><strong>Important:</strong> You must <strong>stop working</strong> as soon as your permit expired. You cannot work until a new work permit is approved. You may stay in Canada while your restoration application is being processed.</p>' +
        '<p>Apply to restore your status and get a new work or study permit as soon as possible. After 90 days from the expiry date, you generally cannot restore from inside Canada.</p>' +
        '<ul><li>Use the official IRCC page: Restore your status and get a work permit.</li><li>If your situation is complex, consider consulting a lawyer or regulated consultant.</li></ul>',
        'warning'
      );
      return;
    }

    if (daysSinceExpiry > NINETY_DAYS) {
      showResult(
        '<h3>More than 90 days have passed since your permit expired</h3>' +
        '<p>Your permit expired <strong>' + daysSinceExpiry + ' days ago</strong> (' + formatDate(expiryDate) + '). The 90-day period to restore your status from inside Canada has passed.</p>' +
        '<p>You are in Canada without valid status. You should <strong>leave Canada as soon as possible</strong> to avoid removal and serious consequences for future immigration. Re-entering may require special permission.</p>' +
        '<p><strong>Get advice from a licensed immigration lawyer or a regulated Canadian immigration consultant (RCIC)</strong> before making decisions.</p>',
        'danger'
      );
    }
  }

  checkBtn.addEventListener('click', runCheck);

  expiryInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      runCheck();
    }
  });
})();
