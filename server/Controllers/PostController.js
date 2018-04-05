import PostModel from "../Models/PostModel";


export const list = (req, res) => {
    PostModel.find({}).exec()
    .then( (list) => {
        return res.json(list)
        }
    );
};

function show(request, response) {
    PostModel.findOne({ id: request.params.id }).exec()
    .then( post => response.json(post) );
};

function create(request, response) {
  PostModel.find({}).exec()
  .then( (list) => {
    const pos= new PostModel({
        id: request.body.id,
        seller: request.body.seller,
        location: request.body.location,
        item: request.body.item,
        price: request.body.price,
    });
    pos.save()
    .then( (post) => {
      return response.json(post);
    });
  })
}

function update(request, response) {
    PostModel.findById(request.params.id).exec()
    .then(post => {
      post.id = request.body.id || post.id;
      post.seller = request.body.seller || post.seller;
      post.item = request.body.item || post.item;
      post.location = request.body.location || post.location;
      post.price = request.body.price || post.price;
      return post.save();
    })
    .then(c=> {
      return response.json(c);
    });
}


function remove(request, response) {
    Post.findByIdAndRemove(request.params.id).exec()
    .then(posts => {
        return response.json(posts);
    });
}

module.exports = {
    list,
    show,
    create,
    update,
    remove
}
