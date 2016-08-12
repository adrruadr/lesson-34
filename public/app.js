

	function something() 
	{
		var x = window.localStorage.getItem('bbb'); // x = hh['bbb']

		x = x * 1 + 1; //string to integer x = x + 1

		window.localStorage.setItem('bbb', x); // hh['bbb'] = x

		alert(x);
	}

	function add_to_cart(id) 
	{
		var key = 'product_' + id;
		
		var x = window.localStorage.getItem(key);
		x = x * 1 + 1;
		window.localStorage.setItem(key, x);

		alert('Items in your cart: ' + cart_get_numb_of_items())
 	}

	function cart_get_numb_of_items() {

		var cnt = 0;
		for (var i = 0; i < window.localStorage.length; i++) 
			{
				var key = window.localStorage.key(i); //getting key
				var value = window.localStorage.getItem(key); //getting value ruby way: hh[key] = x

				if (key.indexOf('product_') == 0)
				{
					cnt = cnt + value * 1;
				}
			}

			return cnt;
	}

	function cart_get_orders() {

		var orders = '';
		for (var i = 0; i < window.localStorage.length; i++) 
			{
				var key = window.localStorage.key(i); //getting key
				var value = window.localStorage.getItem(key); //getting value ruby way: hh[key] = x

				if (key.indexOf('product_') == 0)
				{
					orders = orders + key + '=' + value +',';
				}
			}

			return orders;
	}
