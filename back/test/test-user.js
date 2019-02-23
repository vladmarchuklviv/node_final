process.env.NODE_ENV = 'test';
let User = require('../models/user.model');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');


chai.use(chaiHttp);

describe('User', () => {

    describe('/GET user', () => {
        it('all users', (done) => {
            chai.request(server)
                .get('/user/all')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('/POST user ', () => {
        it('create user', (done) => {
            let book = {
                name: "Vlad"
            };
            chai.request(server)
                .post('/user/create')
                .send(book)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('/GET/:id user', () => {
        it('get user', (done) => {
            let user = new User({ title: "Vlad" });
            user.save((err, user) => {
                chai.request(server)
                    .get('/user/' + user._id)
                    .send(user)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name');
                        done();
                    });
            });

        });
    });
    
    describe('/PUT/:id user', () => {
        it('update user', (done) => {
            let user = new User({title: "Vlad"});
            user.save((err, user) => {
                chai.request(server)
                    .put('/user/' + user._id + '/update')
                    .send({title: "Kolya"})
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name');
                        done();
                    });
            });
        });
    });

    describe('/DELETE/:id user', () => {
        it('delete user', (done) => {
            let user = new User({title: "Vlad"});
            user.save((err, user) => {
                chai.request(server)
                    .delete('/user/' + user._id + 'delete')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.property('message').eql('user deleted');
                        done();
                    });
            });
        });
    });
    
});
