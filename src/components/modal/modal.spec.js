import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Modal from './modal.js'
import useModal from './useModal.js'


// Hooks can only be used inside components, so to test the hook we create an example component within this file
function TestModal(props) {
    const {isShowing, toggle} = useModal()
    return (<><div>
        <Modal isShowing={isShowing} component={props.children}/>
        <button onClick={() => {
            toggle()
        }}>Click to toggle.</button>
        </div>
        </>)
}

describe('modal.js and useModal custom hook', () => {
    it('displays content wrapped in Modal component when toggled', () => {
        // Render the example component that works with Modal and useModal
        render(<TestModal><p>Modal content.</p></TestModal>)

        // Expect the content initially to be hidden.
        expect(screen.queryAllByText('Modal content.')).toHaveLength(0)

        //Click the toggle
        fireEvent.click(screen.getByText('Click to toggle.'))

        // Expect the content to be toggled visible
        expect(screen.getByText('Modal content.'))
    })
})