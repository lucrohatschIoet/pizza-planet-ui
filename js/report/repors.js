/**
 * Fetch the reports and append to the table
 * 
 * ****************************
 * Please change 'json/report.json' 
 * with your service endpoint below
 * ****************************
 */
 fetch('http://127.0.0.1:5000/report/')
 .then(response => response.json())
 .then(report => {
    document.querySelector('#month_name').innerText = report.month_major_revenue.month
    document.querySelector('#revenue').innerText = report.month_major_revenue.revenue
    document.querySelector('#ingredient').innerText = report.most_requested_ingredient.name
    document.querySelector('#ingredient_value').innerText = report.most_requested_ingredient.requested_times
    document.querySelector('#beverage').innerText = report.most_requested_beverage.name
    document.querySelector('#beverage_value').innerText = report.most_requested_beverage.requested_times
    document.querySelector('#client1_name').innerText = report.top_three_clients[0].name
    document.querySelector('#client1_orders').innerText = report.top_three_clients[0].orders
    document.querySelector('#client2_name').innerText = report.top_three_clients[1].name
    document.querySelector('#client2_orders').innerText = report.top_three_clients[1].orders
    document.querySelector('#client3_name').innerText = report.top_three_clients[2].name
    document.querySelector('#client3_orders').innerText = report.top_three_clients[2].orders

 });
