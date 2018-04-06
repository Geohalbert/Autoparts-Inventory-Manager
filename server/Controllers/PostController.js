import PostModel from "../Models/PostModel";

export const list = (req, res) => {
    PostModel.find({}).exec()
    .then( list => res.json(list) );
};

export const show = (req, res) => {
    PostModel.findById(req.params.id).exec()
    .then( post => res.json(post) );
};

export const create = (req, res) => {
    PostModel.find({}).exec()
    .then( List => {
        const id = (List.length + 1);
        const post = new PostModel({
            _id: id,
            location: req.body.location,
            item: req.body.item,
            price: req.body.price,
            seller: req.body.seller
        });
        post.save()
        .then( pos => res.json(pos) )
    });
};

export const update = (req, res) => {
    return res.send('WAT');
};

export const remove = (req, res) => {
    return res.send('WAT');
};
