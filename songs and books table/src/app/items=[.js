items=[
    {id:1,salary:2000},
    {id:2,salary:3000},
    {id:3,salary:4000},
    {id:4,salary:5000},
    {id:5,salary:6000},

]
const ans = this.items.sort(function(a,b){
    return b.salary - a.salary;
});


