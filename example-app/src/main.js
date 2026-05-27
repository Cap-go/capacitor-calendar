import './style.css';
import { CapacitorCalendar, CalendarPermissionScope } from '@capgo/capacitor-calendar';

const output = document.getElementById('plugin-output');
const eventTitleInput = document.getElementById('event-title');
const checkPermissionsButton = document.getElementById('check-permissions');
const requestCalendarButton = document.getElementById('request-calendar');
const createEventButton = document.getElementById('create-event');
const createEventPromptButton = document.getElementById('create-event-prompt');
const listCalendarsButton = document.getElementById('list-calendars');
const listEventsButton = document.getElementById('list-events');

const setOutput = (value) => {
  output.textContent = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
};

const runAction = async (action) => {
  try {
    setOutput(await action());
  } catch (error) {
    setOutput(`Error: ${error?.message ?? error}`);
  }
};

const getEventWindow = () => {
  const startDate = Date.now() + 60 * 60 * 1000;
  const endDate = startDate + 60 * 60 * 1000;

  return { startDate, endDate };
};

const getEventOptions = () => ({
  title: eventTitleInput.value || 'Capgo calendar test',
  ...getEventWindow(),
  location: 'Capgo',
  description: 'Created from the @capgo/capacitor-calendar example app.',
});

checkPermissionsButton.addEventListener('click', () => {
  runAction(() => CapacitorCalendar.checkAllPermissions());
});

requestCalendarButton.addEventListener('click', () => {
  runAction(() =>
    CapacitorCalendar.requestPermission({
      scope: CalendarPermissionScope.WRITE_CALENDAR,
    }),
  );
});

createEventButton.addEventListener('click', () => {
  runAction(() => CapacitorCalendar.createEvent(getEventOptions()));
});

createEventPromptButton.addEventListener('click', () => {
  runAction(() => CapacitorCalendar.createEventWithPrompt(getEventOptions()));
});

listCalendarsButton.addEventListener('click', () => {
  runAction(() => CapacitorCalendar.listCalendars());
});

listEventsButton.addEventListener('click', () => {
  runAction(() =>
    CapacitorCalendar.listEventsInRange({
      from: Date.now(),
      to: Date.now() + 7 * 24 * 60 * 60 * 1000,
    }),
  );
});
