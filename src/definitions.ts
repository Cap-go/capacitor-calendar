import type { PermissionState } from '@capacitor/core';

import type { CalendarPermissionScope } from './schemas/enums/calendar-permission-scope';
import type { Calendar } from './schemas/interfaces/calendar';
import type { CalendarEvent } from './schemas/interfaces/calendar-event';
import type { CalendarSource } from './schemas/interfaces/calendar-source';
import type { CreateCalendarOptions } from './schemas/interfaces/create-calendar-options';
import type { CreateEventOptions } from './schemas/interfaces/create-event-options';
import type { CreateEventWithPromptOptions } from './schemas/interfaces/create-event-with-prompt-options';
import type { CreateReminderOptions } from './schemas/interfaces/create-reminder-options';
import type { DeleteCalendarOptions } from './schemas/interfaces/delete-calendar-options';
import type { DeleteEventOptions } from './schemas/interfaces/delete-event-options';
import type { DeleteEventWithPromptOptions } from './schemas/interfaces/delete-event-with-prompt-options';
import type { DeleteEventsByIdOptions } from './schemas/interfaces/delete-events-by-id-options';
import type { DeleteReminderOptions } from './schemas/interfaces/delete-reminder-options';
import type { DeleteReminderWithPromptOptions } from './schemas/interfaces/delete-reminder-with-prompt-options';
import type { DeleteRemindersByIdOptions } from './schemas/interfaces/delete-reminders-by-id-options';
import type { GetReminderByIdOptions } from './schemas/interfaces/get-reminder-by-id-options';
import type { GetRemindersFromListsOptions } from './schemas/interfaces/get-reminders-from-lists-options';
import type { ListEventsInRangeOptions } from './schemas/interfaces/list-events-in-range-options';
import type { ModifyCalendarOptions } from './schemas/interfaces/modify-calendar-options';
import type { ModifyEventOptions } from './schemas/interfaces/modify-event-options';
import type { ModifyEventWithPromptOptions } from './schemas/interfaces/modify-event-with-prompt-options';
import type { ModifyReminderOptions } from './schemas/interfaces/modify-reminder-options';
import type { OpenCalendarOptions } from './schemas/interfaces/open-calendar-options';
import type { Reminder } from './schemas/interfaces/reminder';
import type { RemindersList } from './schemas/interfaces/reminders-list';
import type { SelectCalendarsWithPromptOptions } from './schemas/interfaces/select-calendars-with-prompt-options';
import type { EventEditAction } from './schemas/types/event-edit-action';
import type { CheckAllPermissionsResult, RequestAllPermissionsResult } from './sub-definitions/calendar-access';
import type { DeleteEventsByIdResult } from './sub-definitions/event-operations';
import type { DeleteRemindersByIdResult } from './sub-definitions/reminders-operations';

export interface CapacitorCalendarPlugin {
  /**
   * Retrieves the current permission state for a given scope.
   *
   * @example
   * CapacitorCalendar.checkPermission({ scope: CalendarPermissionScope.READ_CALENDAR });
   *
   * @platform Android, iOS
   * @since 0.1.0
   */
  checkPermission(options: { scope: CalendarPermissionScope }): Promise<{ result: PermissionState }>;

  /**
   * Retrieves the current state of all permissions.
   *
   * @platform Android, iOS
   * @since 0.1.0
   */
  checkAllPermissions(): Promise<{ result: CheckAllPermissionsResult }>;

  /**
   * Requests permission for a given scope.
   *
   * @deprecated Use {@link requestWriteOnlyCalendarAccess}, {@link requestReadOnlyCalendarAccess},
   * {@link requestFullCalendarAccess} or {@link requestFullRemindersAccess} instead.
   * @platform Android, iOS
   * @since 0.1.0
   */
  requestPermission(options: { scope: CalendarPermissionScope }): Promise<{ result: PermissionState }>;

  /**
   * Requests permission for all calendar and reminder permissions.
   *
   * @deprecated Use {@link requestFullCalendarAccess} or {@link requestFullRemindersAccess} instead.
   * @platform Android, iOS
   * @since 0.1.0
   */
  requestAllPermissions(): Promise<{ result: RequestAllPermissionsResult }>;

  /**
   * Requests write access to the calendar.
   *
   * @platform Android, iOS
   * @since 5.4.0
   */
  requestWriteOnlyCalendarAccess(): Promise<{ result: PermissionState }>;

  /**
   * Requests read access to the calendar.
   *
   * @platform Android
   * @since 5.4.0
   */
  requestReadOnlyCalendarAccess(): Promise<{ result: PermissionState }>;

  /**
   * Requests read and write access to the calendar.
   *
   * @platform Android, iOS
   * @since 5.4.0
   */
  requestFullCalendarAccess(): Promise<{ result: PermissionState }>;

  /**
   * Requests read and write access to reminders.
   *
   * @platform iOS
   * @since 5.4.0
   */
  requestFullRemindersAccess(): Promise<{ result: PermissionState }>;

  /**
   * Opens the system calendar interface to create a new event.
   * On Android this always returns `null`; fetch events to find the newly created event ID.
   *
   * @platform Android, iOS
   * @since 0.1.0
   */
  createEventWithPrompt(options?: CreateEventWithPromptOptions): Promise<{ id: string | null }>;

  /**
   * Opens a system calendar interface to modify an event.
   * On Android this always returns `null`.
   *
   * @platform Android, iOS
   * @since 6.6.0
   */
  modifyEventWithPrompt(options: ModifyEventWithPromptOptions): Promise<{ result: EventEditAction | null }>;

  /**
   * Creates an event in the calendar.
   *
   * @platform iOS, Android
   * @since 0.4.0
   */
  createEvent(options: CreateEventOptions): Promise<{ id: string }>;

  /**
   * Modifies an event.
   *
   * @platform Android, iOS
   * @since 6.6.0
   */
  modifyEvent(options: ModifyEventOptions): Promise<void>;

  /**
   * Deletes multiple events.
   *
   * @deprecated Use `deleteEvent(...)`.
   * @platform Android, iOS
   * @since 0.11.0
   */
  deleteEventsById(options: DeleteEventsByIdOptions): Promise<{ result: DeleteEventsByIdResult }>;

  /**
   * Deletes an event.
   *
   * @platform Android, iOS
   * @since 7.1.0
   */
  deleteEvent(options: DeleteEventOptions): Promise<void>;

  /**
   * Opens a dialog to delete an event.
   *
   * @platform Android, iOS
   * @since 7.1.0
   */
  deleteEventWithPrompt(options: DeleteEventWithPromptOptions): Promise<{ deleted: boolean }>;

  /**
   * Retrieves events within a date range.
   *
   * @platform Android, iOS
   * @since 0.10.0
   */
  listEventsInRange(options: ListEventsInRangeOptions): Promise<{ result: CalendarEvent[] }>;

  /**
   * Saves pending iOS calendar changes.
   *
   * @platform iOS
   * @since 7.1.0
   */
  commit(): Promise<void>;

  /**
   * Opens a system interface to choose one or multiple calendars.
   *
   * @platform iOS
   * @since 0.2.0
   */
  selectCalendarsWithPrompt(options?: SelectCalendarsWithPromptOptions): Promise<{ result: Calendar[] }>;

  /**
   * Retrieves a list of calendar sources.
   *
   * @platform iOS
   * @since 6.6.0
   */
  fetchAllCalendarSources(): Promise<{ result: CalendarSource[] }>;

  /**
   * Retrieves all available calendars.
   *
   * @platform Android, iOS
   * @since 7.1.0
   */
  listCalendars(): Promise<{ result: Calendar[] }>;

  /**
   * Retrieves the default calendar.
   *
   * @platform Android, iOS
   * @since 0.3.0
   */
  getDefaultCalendar(): Promise<{ result: Calendar | null }>;

  /**
   * Opens the calendar app.
   *
   * @platform Android, iOS
   * @since 7.1.0
   */
  openCalendar(options?: OpenCalendarOptions): Promise<void>;

  /**
   * Creates a calendar.
   *
   * @platform Android, iOS
   * @since 5.2.0
   */
  createCalendar(options: CreateCalendarOptions): Promise<{ id: string }>;

  /**
   * Deletes a calendar by ID.
   *
   * @platform Android, iOS
   * @since 5.2.0
   */
  deleteCalendar(options: DeleteCalendarOptions): Promise<void>;

  /**
   * Modifies a calendar.
   *
   * @platform Android, iOS
   * @since 7.2.0
   */
  modifyCalendar(options: ModifyCalendarOptions): Promise<void>;

  /**
   * Retrieves a list of reminder sources.
   *
   * @deprecated Duplicates {@link fetchAllCalendarSources}.
   * @platform iOS
   * @since 6.6.0
   */
  fetchAllRemindersSources(): Promise<{ result: CalendarSource[] }>;

  /**
   * Opens the reminders app.
   *
   * @platform iOS
   * @since 7.1.0
   */
  openReminders(): Promise<void>;

  /**
   * Retrieves the default reminders list.
   *
   * @platform iOS
   * @since 7.1.0
   */
  getDefaultRemindersList(): Promise<{ result: RemindersList | null }>;

  /**
   * Retrieves all available reminders lists.
   *
   * @platform iOS
   * @since 7.1.0
   */
  getRemindersLists(): Promise<{ result: RemindersList[] }>;

  /**
   * Creates a reminder.
   *
   * @platform iOS
   * @since 0.5.0
   */
  createReminder(options: CreateReminderOptions): Promise<{ id: string }>;

  /**
   * Deletes multiple reminders.
   *
   * @deprecated Use `deleteReminder(...)`.
   * @platform iOS
   * @since 5.3.0
   */
  deleteRemindersById(options: DeleteRemindersByIdOptions): Promise<{ result: DeleteRemindersByIdResult }>;

  /**
   * Deletes a reminder.
   *
   * @platform iOS
   * @since 7.1.0
   */
  deleteReminder(options: DeleteReminderOptions): Promise<void>;

  /**
   * Modifies a reminder.
   *
   * @platform iOS
   * @since 6.7.0
   */
  modifyReminder(options: ModifyReminderOptions): Promise<void>;

  /**
   * Retrieves a reminder by ID.
   *
   * @platform iOS
   * @since 7.1.0
   */
  getReminderById(options: GetReminderByIdOptions): Promise<{ result: Reminder | null }>;

  /**
   * Retrieves reminders from multiple lists.
   *
   * @platform iOS
   * @since 5.3.0
   */
  getRemindersFromLists(options: GetRemindersFromListsOptions): Promise<{ result: Reminder[] }>;

  /**
   * Opens a dialog to delete a reminder.
   *
   * @platform iOS
   * @since 7.2.0
   */
  deleteReminderWithPrompt(options: DeleteReminderWithPromptOptions): Promise<{ deleted: boolean }>;
}
