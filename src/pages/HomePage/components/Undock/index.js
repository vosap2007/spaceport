import React, { useState } from 'react';
import Modal from '../../../../components/Modal';
import AccountSelection from './AccountSelection';
import Confirm from './Confirm';
import ConfirmWallet from './ConfirmWallet';
import EnteringPhrase from './EnteringPhrase';
import FirstStep from './FirstStep';
import GoodLuck from './GoodLuck';
import PhraseGenerator from './PhraseGenerator';
import Processing from './Processing';
import SecondStep from './SecondStep';
import TermsConditions from './TermsConditions';
import UndockingSuccessful from './UndockingSuccessful';
import UndockSpaceport from './UndockSpaceport';

const Undock = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="undock">
      <h1 className="undock__title">Undocking Your SPACEPORT Account</h1>
      <p className="undock__text">
        SPACEPORT allows users to connect to dApps and services in the NEAR
        ecosystem from a secure and simple entry point. However, once you are
        ready to fly on your own you may UNDOCK your SPACEPORT account and head
        out on your own!
      </p>

      <ul className="undock__following">
        Effectively you will be doing the following:
        <li>Creating your own NEAR wallet</li>
        <li>Transferring your assets to the wallet</li>
        <li>
          Launching away from SPACEPORT to explore on your own- this means you
          will be responsible for your PRIVATE KEY. <br />{' '}
          <p className="undock__following__happy">
            No one will be able to help you recover your wallet if anything
            happens!
          </p>
        </li>
      </ul>

      <h2 className="undock__title2">So are you ready to fly alone?</h2>
      <ul className="undock__launch">
        Launch Sequence:
        <li>Initiate and fund launch</li>
        <li>Transferring of assets</li>
        <li>Confirm undock</li>
      </ul>

      <Modal
        isOpened={isOpened}
        setIsOpened={setIsOpened}
        // titleModal={'Terms & Conditions'}
        // titleModal={'Account Selection'}
        // titleModal={'Undock From SPACEPORT'}
        // titleModal={'Confirm Undocking'}
        // titleModal={'Processing...'}
        // titleModal={'Undocking your account...'}
        // titleModal={'Enable Passphrase on your account.'}
        // titleModal={'Confirm you have secured your wallet'}
        // titleModal={'Undocking Successful'}
      >
        {/* <TermsConditions /> */}
        {/* <AccountSelection /> */}
        {/* <UndockSpaceport /> */}
        {/* <Confirm /> */}
        {/* <Processing /> */}
        {/* <PhraseGenerator /> */}
        {/* <EnteringPhrase /> */}
        {/* <FirstStep /> */}
        {/* <SecondStep /> */}
        {/* <ConfirmWallet /> */}
        {/* <UndockingSuccessful /> */}
        <GoodLuck />
      </Modal>

      <button
        className="undock__button"
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        Proceed to Terms & Conditions
      </button>
    </div>
  );
};

export default Undock;
