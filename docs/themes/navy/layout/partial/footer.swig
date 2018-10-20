<footer id="footer" class="wrapper">
  <div class="inner">
    <div id="footer-copyright">
      &copy; {{ moment(Date.now()).year() }} <a href="https://github.com/blankapp/ui/graphs/contributors" target="_blank">{{ config.author }}</a> based on <a href="https://github.com/hexojs/site" target="_blank">hexojs/site</a><br>
      Documentation licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>.
    </div>
    <div id="footer-links">
      <a href="https://t.me/{{ config.telegram }}" class="footer-link" target="_blank"><i class="fa fa-telegram"></i></a>
      <a href="https://twitter.com/{{ config.twitter }}" class="footer-link" target="_blank"><i class="fa fa-twitter"></i></a>
      <a href="https://github.com/{{ config.github }}" class="footer-link" target="_blank"><i class="fa fa-github-alt"></i></a>
    </div>
  </div>
</footer>
