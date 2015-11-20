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

$.fn.mailsuggest = function() {
    var $self = this;
    var $input = $self.find('.mailsuggest-input');
    var $wrapper = $self.find('.mailsuggest-suggestion-wrapper');
    var $suggestion = $wrapper.find('.mailsuggest-suggestion');

    $input.on('blur', function() {
      $(this).mailcheck(
        {
          suggested: function (element, suggestion) {
            $(element).closest('.mailsuggest').find('.mailsuggest-suggestion').html(suggestion.full);
            $(element).closest('.mailsuggest').find('.mailsuggest-suggestion-wrapper').show();
          },

          empty: function (element) {
            $(element).closest('.mailsuggest').find('.mailsuggest-suggestion-wrapper').hide();
          }
        }
      );
    });

    $suggestion.on('click', function (e) {
      e.preventDefault();

      $input.val($(this).html());
      $wrapper.hide();
    });
  
}
