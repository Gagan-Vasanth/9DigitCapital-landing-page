import React, { useState } from 'react';
import CardWrapper from '../common/CardWrapper';
import AMFIRegistrationImage from '../assets/AMFIRegistration.jpeg'

const Disclosure = () => {
  const [activeTab, setActiveTab] = useState('commission');

  return (
    <section className='disclosureContainer' id="disclosure-content">
      <div className='uniqueNavBar'>
        <div 
          className={`uniqueTab ${activeTab === 'commission' ? 'active' : ''}`} 
          onClick={() => setActiveTab('commission')}
        >
          Commission Overview
        </div>
        <div 
          className={`uniqueTab ${activeTab === 'amfi' ? 'active' : ''}`} 
          onClick={() => setActiveTab('amfi')}
        >
          AMFI Certification
        </div>
      </div>
      <div className='content'>
        {activeTab === 'commission' ? (
          <div className='tabContent'>
            <CardWrapper className={"reducedMarginTop needSmallCard"}>
                <h2 className='service-header'>Commission Disclosure</h2>
                <div className='disclosure-content' style={{ textAlign: 'center'}}>
                    We receive commission from Asset Management Companies for investments made under our ARN. The commission receivable is subject to and as per the guidelines laid down by SEBI and the Asset Management Companies. The commissions payable to us for the different schemes of various mutual funds, as required to be disclosed under clause 4(d) of the SEBI Circular No. SEBI/IMD/CIR No. 4/168230 dated June 30, 2009 is provided hereinbelow
                </div>
            </CardWrapper>
            <CardWrapper className='overflow-card'>
                <div className='disclosure-table'>
                    <h3 className='disclosure-heading big-row'>Fund Category</h3>
                    <h3 className='disclosure-heading small-row'>Trail commission per annum</h3>
                    <div className='green-active big-row'><h4>Equity Oriented Schemes</h4><p>(Includes Arbitrage Funds, ELSS Funds, Index Funds, Thematic Funds, all Equity Funds and Equity oriented Hybrid Funds)</p></div>
                    <div className='white-active center small-row'>0.15% to 1.45%</div>
                    <div className='white-active big-row'><h4>Debt Oriented Schemes</h4><p>(all debt schemes including Overnight, Liquid Funds)</p></div>
                    <div className='green-active center small-row'>0.05% to 1.00%</div>
                    <div className='green-active big-row'><h4>EGold ETF Funds</h4></div>
                    <div className='white-active center small-row'>0.20% to 1.45%</div>
                    <div className='white-active big-row'><h4>International Funds</h4><p>(Index, Fund of Funds)</p></div>
                    <div className='green-active center small-row'>0.40% - 1.00%</div>
                </div>
            </CardWrapper>
          </div>
        ) : (
          <div className='tabContent'>
            <CardWrapper className={"reducedMarginTop"}>
                <h2 className='service-header'>AMFI Certification</h2>
                <div className='disclosure-content'>
                    Ara Financial Services Pvt Ltd. is registered with Association of Mutual Funds in India (AMFI) as a Mutual Fund Distributor since 29th September, 2009.
                    <div><b>AMFI Registration Number (ARN):</b> ARN - 280833</div>
                    <div><b>Date of Initial Registration:</b> 23-Nov-2023</div>
                    <div><b>Current Validity of ARN:</b> 11-Sept-2026</div>
                </div>
            </CardWrapper>
            <CardWrapper>
              <img src={AMFIRegistrationImage} width={'70%'} height={'70%'}/>
            </CardWrapper>
          </div>
        )}
      </div>
    </section>
  );
};

export default Disclosure;