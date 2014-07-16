var Lab = require('../lib');

Lab.experiment('math', function () {

    Lab.test('returns true when 1 + 1 equals 2 (expect)', function (done) {

        this.plan(1);
        this.expect(1+1).to.equal(2);
        done();
    });

    Lab.test('returns true when 1 + 1 equals 2 and 2 + 2 equals 4 (expect)', function (done) {

        this.plan(2);
        this.expect(1+1).to.equal(2);
        this.expect(2+2).to.equal(4);
        done();
    });

    Lab.test('returns true when 1 + 1 equals 2 (assert)', function (done) {

        this.plan(1);
        this.assert.equal(1+1, 2);
        done();
    });

    Lab.test('returns true when 1 + 1 equals 2 and 2 + 2 equals 4 (assert)', function (done) {

        this.plan(2);
        this.assert.equal(1+1, 2);
        this.assert.equal(2+2, 4);
        done();
    });

    Lab.test('returns true when 1 + 1 equals 2 (expect)', function (done) {

        this.plan(1);
        this.expect(1+1).to.equal(2);
        this.expect(1+1).to.equal(2);
        done();
    });

    Lab.test('returns true when 1 + 1 equals 2 (assert)', function (done) {

        this.plan(1);
        this.assert.equal(1+1, 2);
        this.assert.equal(1+1, 2);
        done();
    });

    Lab.experiment('parallel math', { parallel: true }, function () {

        Lab.test('returns true when 1 + 1 equals 2 (expect)', function (done) {

            this.plan(1);
            this.expect(1+1).to.equal(2);
            done();
        });

        Lab.test('returns true when 1 + 1 equals 2 and 2 + 2 equals 4 (expect)', function (done) {

            this.plan(2);
            this.expect(1+1).to.equal(2);
            this.expect(2+2).to.equal(4);
            done();
        });

        Lab.test('returns true when 1 + 1 equals 2 (assert)', function (done) {

            this.plan(1);
            this.assert.equal(1+1, 2);
            done();
        });

        Lab.test('returns true when 1 + 1 equals 2 and 2 + 2 equals 4 (assert)', function (done) {

            this.plan(2);
            this.assert.equal(1+1, 2);
            this.assert.equal(2+2, 4);
            done();
        });

        Lab.test('returns true when 1 + 1 equals 2 (expect)', function (done) {

            this.plan(1);
            this.expect(1+1).to.equal(2);
            this.expect(1+1).to.equal(2);
            done();
        });

        Lab.test('returns true when 1 + 1 equals 2 (assert)', function (done) {

            this.plan(1);
            this.assert.equal(1+1, 2);
            this.assert.equal(1+1, 2);
            done();
        });

    });

});
