const multisig = require('./../services/multisig');

module.exports.command = 'multisig-approve-transfer <transferId>';
module.exports.describe = 'Approve the request to transfer tokens';

module.exports.handler = function(argv) {
    console.log(`Approving multisig transfer ${argv.transferId}`);

    return multisig.approveTransfer(argv.user, argv.transferId).then((transferRequest) => {
        console.log(`transfer request ${JSON.stringify(transferRequest)}`);
    });
};
