var should = require('chai').should();
var expect = require('chai').expect;

describe('htmlfile', function(){
	before(function(){
		this.htmlfile = require('../htmlfile');
	});

	describe('constructor', function(){
		it('should not throw errors under any circumstance', function(){
			this.htmlfile();
		});

		describe('callback', function(){
			it('should have no errors with valid file', function(done){
				this.htmlfile('test/index.html', function(err){
					expect(err).to.be.null;
					done();
				});
			});
			it('should have errors with nonexistent file', function(done){
				this.htmlfile('file which does not exist', function(err){
					err.should.be.ok;
					done();
				});
			});
			it('should have errors with invalid html');
		});
	});

	describe('tag number from position', function(){
		before(function(done){
			this.file = new this.htmlfile('test/index.html', function(err){
				done(err);
			});
		});
		it('should return null when given an out of bounds index', function(){
			expect(this.file.tagFromPosition(-1, -1)).to.be.null;
		});
	});
});