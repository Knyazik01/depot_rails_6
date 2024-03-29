(function () {
  var I18n = window.I18n || {};
  I18n.translations = {
    'en': {
      'date': {
        'formats': { 'default': '%Y-%m-%d', 'short': '%b %d', 'long': '%B %d, %Y' },
        'day_names': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'abbr_day_names': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        'month_names': [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        'abbr_month_names': [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        'order': ['year', 'month', 'day'],
      },
      'time': {
        'formats': { 'default': '%a, %d %b %Y %H:%M:%S %z', 'short': '%d %b %H:%M', 'long': '%B %d, %Y %H:%M' },
        'am': 'am',
        'pm': 'pm',
      },
      'support': {
        'array': {
          'words_connector': ', ',
          'two_words_connector': ' and ',
          'last_word_connector': ', and ',
        },
      },
      'number': {
        'format': {
          'separator': '.',
          'delimiter': ',',
          'precision': 3,
          'round_mode': 'default',
          'significant': false,
          'strip_insignificant_zeros': false,
        },
        'currency': {
          'format': {
            'format': '%u%n',
            'unit': '$',
            'separator': '.',
            'delimiter': ',',
            'precision': 2,
            'significant': false,
            'strip_insignificant_zeros': false,
          },
        },
        'percentage': { 'format': { 'delimiter': '', 'format': '%n%' } },
        'precision': { 'format': { 'delimiter': '' } },
        'human': {
          'format': { 'delimiter': '', 'precision': 3, 'significant': true, 'strip_insignificant_zeros': true },
          'storage_units': {
            'format': '%n %u',
            'units': {
              'byte': { 'one': 'Byte', 'other': 'Bytes' },
              'kb': 'KB',
              'mb': 'MB',
              'gb': 'GB',
              'tb': 'TB',
              'pb': 'PB',
              'eb': 'EB',
            },
          },
          'decimal_units': {
            'format': '%n %u',
            'units': {
              'unit': '',
              'thousand': 'Thousand',
              'million': 'Million',
              'billion': 'Billion',
              'trillion': 'Trillion',
              'quadrillion': 'Quadrillion',
            },
          },
        },
        'nth': { 'ordinals': {}, 'ordinalized': {} },
      },
      'errors': {
        'format': '%{attribute} %{message}',
        'messages': {
          'model_invalid': 'Validation failed: %{errors}',
          'inclusion': 'is not included in the list',
          'exclusion': 'is reserved',
          'invalid': 'is invalid',
          'confirmation': 'doesn\'t match %{attribute}',
          'accepted': 'must be accepted',
          'empty': 'can\'t be empty',
          'blank': 'can\'t be blank',
          'present': 'must be blank',
          'too_long': {
            'one': 'is too long (maximum is 1 character)',
            'other': 'is too long (maximum is %{count} characters)',
          },
          'too_short': {
            'one': 'is too short (minimum is 1 character)',
            'other': 'is too short (minimum is %{count} characters)',
          },
          'wrong_length': {
            'one': 'is the wrong length (should be 1 character)',
            'other': 'is the wrong length (should be %{count} characters)',
          },
          'not_a_number': 'is not a number',
          'not_an_integer': 'must be an integer',
          'greater_than': 'must be greater than %{count}',
          'greater_than_or_equal_to': 'must be greater than or equal to %{count}',
          'equal_to': 'must be equal to %{count}',
          'less_than': 'must be less than %{count}',
          'less_than_or_equal_to': 'must be less than or equal to %{count}',
          'other_than': 'must be other than %{count}',
          'odd': 'must be odd',
          'even': 'must be even',
          'required': 'must exist',
          'taken': 'has already been taken',
        },
        'template': {
          'body': 'There were problems with the following fields:',
          'header': {
            'one': '1 error prohibited this %{model} from being saved',
            'other': '%{count} errors prohibited this %{model} from being saved',
          },
        },
        'unavailable_session': 'Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn\'t store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n',
        'unacceptable_request': 'A supported version is expected in the Accept header.\n',
        'connection_refused': 'Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n',
      },
      'activerecord': {
        'errors': {
          'messages': {
            'record_invalid': 'Validation failed: %{errors}',
            'restrict_dependent_destroy': {
              'has_one': 'Cannot delete record because a dependent %{record} exists',
              'has_many': 'Cannot delete record because dependent %{record} exist',
            },
          },
        },
      },
      'datetime': {
        'distance_in_words': {
          'half_a_minute': 'half a minute',
          'less_than_x_seconds': { 'one': 'less than 1 second', 'other': 'less than %{count} seconds' },
          'x_seconds': { 'one': '1 second', 'other': '%{count} seconds' },
          'less_than_x_minutes': { 'one': 'less than a minute', 'other': 'less than %{count} minutes' },
          'x_minutes': { 'one': '1 minute', 'other': '%{count} minutes' },
          'about_x_hours': { 'one': 'about 1 hour', 'other': 'about %{count} hours' },
          'x_days': { 'one': '1 day', 'other': '%{count} days' },
          'about_x_months': { 'one': 'about 1 month', 'other': 'about %{count} months' },
          'x_months': { 'one': '1 month', 'other': '%{count} months' },
          'about_x_years': { 'one': 'about 1 year', 'other': 'about %{count} years' },
          'over_x_years': { 'one': 'over 1 year', 'other': 'over %{count} years' },
          'almost_x_years': { 'one': 'almost 1 year', 'other': 'almost %{count} years' },
        },
        'prompts': {
          'year': 'Year',
          'month': 'Month',
          'day': 'Day',
          'hour': 'Hour',
          'minute': 'Minute',
          'second': 'Seconds',
        },
      },
      'helpers': {
        'select': { 'prompt': 'Please select' },
        'submit': { 'create': 'Create %{model}', 'update': 'Update %{model}', 'submit': 'Save %{model}' },
      },
      'layouts': {
        'application': {
          'title': 'The Pragmatic Bookshelf',
          'home': 'Home',
          'questions': 'Questions',
          'news': 'News',
          'contact': 'Contact',
        },
      },
      'carts': { 'cart': { 'title': 'Your Cart', 'empty': 'Empty cart', 'checkout': 'Checkout' } },
      'store': { 'index': { 'title_html': 'Your Pragmatic Catalog', 'add_html': 'Add to Cart' } },
      'orders': {
        'new': { 'legend': 'Please Enter Your Details' },
        'form': {
          'name': 'Name',
          'address_html': 'Address',
          'email': 'E-mail',
          'pay_type': 'Pay with',
          'pay_prompt_html': 'Select a payment method',
          'submit': 'Place Order',
          'pay_types': { 'check': 'Check', 'credit_card': 'Credit Card', 'purchase_order': 'Purchase Order' },
          'check_pay_type': { 'routing_number': 'Routing #', 'account_number': 'Account #' },
          'credit_card_pay_type': { 'cc_number': 'CC #', 'expiration_date': 'Expiry' },
          'purchase_order_pay_type': { 'po_number': 'PO #' },
        },
      },
      'thanks': 'Thank you for your order',
    }, 'es': {
      'number': {
        'currency': {
          'format': {
            'unit': '$US',
            'precision': 2,
            'separator': ',',
            'delimiter': '.',
            'format': '%n\u0026nbsp;%u',
          },
        },
      },
      'activerecord': {
        'models': { 'order': 'pedido' },
        'attributes': {
          'order': {
            'address': 'Direcci\u0026oacute;n',
            'name': 'Nombre',
            'email': 'E-mail',
            'pay_type': 'Forma de pago',
          },
        },
        'errors': {
          'messages': {
            'inclusion': 'no est\u0026aacute; incluido en la lista',
            'blank': 'no puede quedar en blanco',
          },
        },
      },
      'errors': {
        'template': {
          'body': 'Hay problemas con los siguientes campos:',
          'header': {
            'one': '1 error ha impedido que este %{model} se guarde',
            'other': '%{count} errores han impedido que este %{model} se guarde',
          },
        },
      },
      'layouts': {
        'application': {
          'title': 'Biblioteca de Pragmatic',
          'home': 'Inicio',
          'questions': 'Preguntas',
          'news': 'Noticias',
          'contact': 'Contacto',
        },
      },
      'carts': { 'cart': { 'title': 'Carrito de la Compra', 'empty': 'Vaciar Carrito', 'checkout': 'Comprar' } },
      'store': {
        'index': {
          'title_html': 'Su Cat\u0026aacute;logo de Pragmatic',
          'add_html': 'A\u0026ntilde;adir al Carrito',
        },
      },
      'orders': {
        'new': { 'legend': 'Por favor, introduzca sus datos' },
        'form': {
          'name': 'Nombre',
          'address_html': 'Direcci\u0026oacute;n',
          'email': 'E-mail',
          'pay_type': 'Forma de pago',
          'pay_prompt_html': 'Seleccione un método de pago',
          'submit': 'Realizar Pedido',
          'pay_types': { 'check': 'Cheque', 'credit_card': 'Tarjeta de Crédito', 'purchase_order': 'Orden de Compra' },
          'check_pay_type': { 'routing_number': '# de Enrutamiento', 'account_number': '# de Cuenta' },
          'credit_card_pay_type': { 'cc_number': 'Número', 'expiration_date': 'Expiración' },
          'purchase_order_pay_type': { 'po_number': 'Número' },
        },
      },
      'thanks': 'Gracias por su pedido',
    },
  };
})();