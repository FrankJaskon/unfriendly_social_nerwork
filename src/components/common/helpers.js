export const stopChangingOnEscape = (event, isChangingMode, setIsChangingMode) => {
    const {keyCode} = event;
    if (+keyCode === 27 && isChangingMode) {
        setIsChangingMode(false);
    }
}