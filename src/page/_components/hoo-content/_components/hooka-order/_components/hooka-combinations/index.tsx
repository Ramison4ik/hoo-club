import React, { memo } from "react";
import {Text} from "src/_components/text";
import hooka from "src/page/_components/hoo-content/_assets/hooka.svg";
import present from "src/page/_components/hoo-content/_assets/Present.svg";
import './index.scss'

type PropsType = {
  combination: Array<any>;
  onOrderModal: () => void;
  withPresent?: boolean;
};

export const HookaCombinations = memo(({combination, onOrderModal, withPresent = false}:PropsType) => {
  return (
    <div className="HookaOrder__tab-content">
      {combination.map(({id, firstLi, secondLi, thirdLi, price, prize}) => (
          <div key={id} className="HookaOrder__combination-hooka">
            <div className="HookaOrder__combination-wrapper">
              <div className="HookaOrder__combination">
                <ul className="HookaOrder__combination-list">
                  <li className="HookaOrder__combination-list-item">
                    <Text size='h2-mobile' color='White' text={firstLi}/>
                  </li>
                  <li className="HookaOrder__combination-list-item">
                    <Text size='h2-mobile' color='White' text={secondLi}/>
                  </li>
                  <li className="HookaOrder__combination-list-item">
                    <Text size='h2-mobile' color='White' text={thirdLi}/>
                  </li>
                  {withPresent&&(
                    <li className="HookaOrder__combination-list-item, HookaOrder__combination-list-item--present">
                      <div className="HookaOrder__list-item-present-wrapper">
                        <div className="HookaOrder__list-item-present-image">
                          <img
                            alt='HooClub'
                            className='HookaOrder__present-image'
                            // https://caniuse.com/?search=lazy%20loading%20attribute
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            loading="lazy"
                            src={present}
                          />
                        </div>
                        <div className="HookaOrder__list-item-present-text">
                          <Text size='h2-mobile' color='Yellow' text={prize}/>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
              <img
                alt='HooClub'
                className='HookaOrder__hooka-image'
                // https://caniuse.com/?search=lazy%20loading%20attribute
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                loading="lazy"
                src={hooka}
              />
            </div>
            <div className="HookaOrder__combination-bottom">
              <div className="HookaOrder__combination-price">
                <Text size="h1-gagalin" color="White" text={price}/>
              </div>
              <div className="HookaOrder__combination-button-wrapper">
                <div role="button" onClick={onOrderModal} tabIndex={1} className="HookaOrder__combination-button">
                  <Text size='h4' color="White" text='Заказать'/>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
});
