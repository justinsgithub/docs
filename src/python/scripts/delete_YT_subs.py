from time import sleep
import pyautogui

sleep(5)
for subscribe_button in range(100):
    pyautogui.press('tab')
    pyautogui.press('tab')
    pyautogui.press('tab')
    pyautogui.press('enter')
    sleep(1)
    pyautogui.press('tab')
    pyautogui.press('enter')
    sleep(1)
