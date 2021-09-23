import React from 'react'
import Accordion from './AccordionComp'
import Chevron from './ChevronComp'
import { useLocation, Link } from 'react-router-dom'
import './styles/AccordionCompStyle.css'
import './styles/SideBarCompStyle.css'

//https://codepen.io/una/pen/Gxwogy

export default function SideBarComp() {
  const [checkBoxChecked, setCheckBoxChecked] = React.useState(false)

  const location = useLocation().pathname
  console.log(location)

  const styleObj = {
    color: 'white',
    fontWeight: '300',
  }

  function onSlideBarClicked(val) {
    setCheckBoxChecked(val.checked)
  }

  return (
    <div id='menuToggle'>
      <input
        type='checkbox'
        checked={checkBoxChecked}
        onChange={onSlideBarClicked}
      />
      <span></span>
      <span></span>
      <span></span>
      <ul id='menu'>
        <li>
          <Accordion
            title='BAGS'
            content={
              <>
                <AccordianSubItemsComp link={'/bags/women'} title={'Women'} />
                <AccordianSubItemsComp link={'/bags/tote'} title={'Tote'} />
                <AccordianSubItemsComp link={'/bags/office'} title={'Office'} />
                <AccordianSubItemsComp link={'/bags/travel'} title={'Travel'} />
              </>
            }
          />
        </li>

        <li>
          <Accordion
            title='HOME'
            content={
              <>
                <AccordianSubItemsComp link={'/home/dining'} title={'Dining'} />
                <AccordianSubItemsComp
                  link={'/home/kitchen'}
                  title={'Kitchen'}
                />
                <AccordianSubItemsComp
                  link={'/home/laundry'}
                  title={'Laundry'}
                />
                <AccordianSubItemsComp link={'/home/garden'} title={'Garden'} />
              </>
            }
          />
        </li>

        <li>
          <Accordion
            title='LIFESTYLE'
            content={
              <>
                <AccordianSubItemsComp
                  link={'/lifestyle/hygiene'}
                  title={'Health & Hygiene'}
                />
                <AccordianSubItemsComp
                  link={'/lifestyle/workout'}
                  title={'Workout'}
                />
                <AccordianSubItemsComp
                  link={'/lifestyle/hobby'}
                  title={'Hobby'}
                />
                <AccordianSubItemsComp
                  link={'/lifestyle/stationery'}
                  title={'Stationery'}
                />
              </>
            }
          />
        </li>

        <li>
          <Accordion
            title='GIFT'
            content={
              <>
                <AccordianSubItemsComp
                  link={'/gift/giftbox'}
                  title={'Gift Box'}
                />
                <AccordianSubItemsComp
                  link={'/gift/giftbag'}
                  title={'Gift Bag'}
                />
                <AccordianSubItemsComp
                  link={'/gift/accessories'}
                  title={'Accessories'}
                />
              </>
            }
          />
        </li>

        <li>
          <Accordion
            title='STORAGE'
            content={
              <>
                <AccordianSubItemsComp
                  link={'/storage/organisers'}
                  title={'Organisers'}
                />
                <AccordianSubItemsComp link={'/storage/home'} title={'Home'} />
              </>
            }
          />
        </li>

        <li>
          <Accordion
            title='ACCESSORIES'
            content={
              <>
                <AccordianSubItemsComp
                  link={'/accessories/onthego'}
                  title={'On The Go'}
                />
                <AccordianSubItemsComp
                  link={'/accessories/wallet'}
                  title={'Wallets'}
                />
              </>
            }
          />
        </li>
      </ul>
    </div>
  )

  function AccordianSubItemsComp({ link, title }) {
    return (
      <Link to={link} style={{ textDecoration: 'none' }}>
        <button
          className={'menu-item-sub-title'}
          style={{ width: '100%' }}
          onClick={() => setCheckBoxChecked(false)}
        >
          <p className='accordion__title' style={{ color: '#e3e1e1' }}>
            {title}
          </p>
          <Chevron className={'accordion__icon'} width={10} fill={'#e3e1e1'} />
        </button>
      </Link>
    )
  }
}
