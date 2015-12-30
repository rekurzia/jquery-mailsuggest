/*
 * @author Adam Štipák <adam.stipak@gmail.com>
 *
 * Released under the MIT License.
 *
 * Usage:
 *  .mailsuggest
 *    .mailsuggest-input
 *    .mailsuggest-suggestion-wrapper
 *      .mailsuggest-suggestion
 */

$.fn.mailsuggest = function (options) {

  var settings = $.extend(
    {
      domains: $.fn.mailcheck.defaultDomains,
      secondLevelDomains: $.fn.mailcheck.defaultSecondLevelDomains,
      topLevelDomains: $.fn.mailcheck.defaultTopLevelDomains,
      suggested: function (element, suggestion) {
        $(element).closest('.mailsuggest').find('.mailsuggest-suggestion').html(suggestion.full);
        $(element).closest('.mailsuggest').find('.mailsuggest-suggestion-wrapper').show();
      },

      empty: function (element) {
        $(element).closest('.mailsuggest').find('.mailsuggest-suggestion-wrapper').hide();
      }
    },
    options
  );

  var $self = this;
  var $input = $self.find('.mailsuggest-input');
  var $wrapper = $self.find('.mailsuggest-suggestion-wrapper');
  var $suggestion = $wrapper.find('.mailsuggest-suggestion');

  $input.on('blur', function () {
    console.log(settings);
    $(this).mailcheck(settings);
  });

  $suggestion.on('click', function (e) {
    e.preventDefault();

    $input.val($(this).html());
    $wrapper.hide();
  });
}
