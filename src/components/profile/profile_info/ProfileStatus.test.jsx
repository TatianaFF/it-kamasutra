import ProfileStatus from "./ProfileStatus";
import { create } from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"test status"}/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("test status")
    })

    test("after creation span should be displayed", async () => {
        const component = create(<ProfileStatus status="test status"/>)
        const root = component.root
        let span = await root.findByType("span")
        expect(span).not.toBeNull()
    })

    test("after creation input should not be displayed",  () => {
        const component = create(<ProfileStatus status="test status"/>)
        const root = component.root
        // let input = await root.findByType("input")
        expect( () => {
            // eslint-disable-next-line testing-library/await-async-query
            let input = root.findByType("input")
        }).toThrow()
    })

    test("input should be displayed in editMode instead of span", async () => {
        const component = create(<ProfileStatus status="test status"/>)
        const root = component.root
        let span = await root.findByType("span")
        span.props.onDoubleClick()
        let input = await root.findByType("input")
        expect(input.props.value).toBe("test status")
    })

    test("callback should be calld",  () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="test status" updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})