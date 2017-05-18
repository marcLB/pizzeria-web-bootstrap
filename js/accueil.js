  $(function() { 
                // Gestion des tooltips des pizzas du moment
                $(".tooltip-link").tooltip({
                    title: "<div style='background-color:white; border: 1px solid black'><img src='http://icons.iconarchive.com/icons/sonya/swarm/256/Pizza-icon.png' style='width:24px;'>Pizza</i></div>", 	
                    html: true, 
                    template : '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-head"><h2><img src="http://icons.iconarchive.com/icons/sonya/swarm/256/Pizza-icon.png" style="width:24px;"> Info</h2></div><div class="tooltip-inner"></div></div>'
                });
                // 
                $('.pagination li').on('click',function(e) {
                    var tag = $(this);
                    var indice = tag.text();
                    var index = $('.pagination li').index(this);
                    console.log("indice: "+indice);
                    $('.pagination li').siblings('li').removeClass('active');
                    if (!tag.hasClass('active') && (index > 0 && index < 4)) {
                        tag.addClass('active');
                        $("#pizzasDuMoment").load("Pagination" + tag.text() + ".html");
                    }      
                    e.preventDefault();
                });
               chargeHTML('Pagination1')
            });
            function chargeHTML(page) {
                $("#contenu").load(page + ".html");
            }
