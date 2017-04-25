
arrayOfDataMulti = new Array(
    [[14,44,26],'2007'],
    [[18,38,38],'2008'],
    [[24,32,57],'2009']
);  

$('#allcompany').jqBarGraph({
    data: arrayOfDataMulti,
    colors: ['#242424','#437346','#97D95C'] ,
   legends: ['ads','leads','google ads'],
   legend: true
});