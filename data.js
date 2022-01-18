var input = [
    {
         "id": 1,
         "title": "Title 1",
         "childrens": [
              {
                   "id": 2,
                   "title": "Title 2",
                   "childrens": []
              }
         ]
    },
    {
         "id": 3,
         "title": "Title 3",
         "childrens": [
              {
                   "id": 4,
                   "title": "Title 4",
                   "childrens": [
                        {
                             "id": 5,
                             "title": "Title 5",
                             "childrens": []
                        }
                   ]
              }
         ]
    }
]
var output=[];
function fun(obj){
     var out={};
     out.id=obj.id;
     out.title=obj.title;
     out.childrens=[];
     output.push(out);
     // if(obj.childrens.length > 0){
          obj.childrens.forEach(function(element){
               fun(element);
          })
     }
     console.log(output)

input.forEach(function(data){
     fun(data);
})
