var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Todo = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date,
    status: String
});
 
mongoose.model( 'Todo', Todo );
// mongoose.connect( 'mongodb://localhost/express-todo' );
mongoose.connect( 'mongodb://jiyangwang:todo@ds019766.mlab.com:19766/express-todo' );