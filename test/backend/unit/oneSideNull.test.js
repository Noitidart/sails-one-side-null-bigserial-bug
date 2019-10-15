const cleanDatabase = require('../utils/cleanDatabase');

describe('One-side of relation can be null', () => {

  after(async () => {

    // await cleanDatabase();

  });

  it('can create a payment with donationBox', async () => {

    const donationBox = await DonationBox.create().fetch();
    console.log('donationBox:', donationBox);
    await expect(Payment.create({
        donationBox: donationBox.id
    })).to.eventually.be.fulfilled;

    console.log(require('util').inspect(await Payment.find({}), false, null, true));

  });

  it('can create a payment with null donationBox', async () => {

    await expect(Payment.create()).to.eventually.be.fulfilled

    console.log(require('util').inspect(await Payment.find({}).populate('donationBox'), false, null, true));

  });

});
