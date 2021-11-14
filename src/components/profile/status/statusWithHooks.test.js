import React from "react";
import {Provider} from 'react-redux';
import {create, act} from "react-test-renderer";
import ProfileStatus from '.';
import {store} from '../../../redux/redux-store';

describe("Profile-status component", () => {
  test("Status has not to equal 'null'", () => {
    let component;
    act(() => {
      component = create(<Provider store={store}><ProfileStatus /></ Provider>);
    });
    const instance = component.root;
    const statusField = instance.findAllByType("div");
    expect(statusField[1].props.children).not.toBeNull();
  });
  test("Status has to be 'User has no status'", () => {
    let component;
    act(() => {
      component = create(<Provider store={store}><ProfileStatus /></ Provider>);
    });
    const instance = component.root;
    const statusField = instance.findAllByType("div");
    expect(statusField[1].props.children).toBe('User has no status');
  });
  test("Input doesn't exist", () => {
    let component;
    act(() => {
      component = create(<Provider store={store}><ProfileStatus /></ Provider>);
    });
    const instance = component.root;
    const statusField = instance.findAllByType("input");
    expect(statusField.length).toBe(0);
  });
});