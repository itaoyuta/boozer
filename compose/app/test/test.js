var should = require('chai').should;
var co = require('co');
var sinon = require('sinon');
var jade = require('jade');

describe('post route', function () {
	beforeEach(function () {
		this.renderFileSpy = sinon.stub(jade, 'renderFile').callArgWith(2, '');
	});

	afterEach(function () {
		jade.renderFile.restore();
	});

	describe('GET /', function () {
		it('should display index page with title', function (done) {
			res.render = function (view, vars) {
				view.should.equal('index');

				vars.title.should.eql('Express');

				done();
			};

			routes.index(req, res);

		});
	});
});





// var assert = require('chai').assert;
//
// describe('Array', function () {
// 	describe('#indexOf()', function () {
// 		it('should return -1 when the value is not present', function() {
// 			assert.equal(-1, [1, 2, 3].indexOf(5));
// 			assert.equal(-1, [1, 2, 3].indexOf(0));
// 		});
// 	});
// });




// var should = require('chai').should;
//
// describe
