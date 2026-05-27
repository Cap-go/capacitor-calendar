package app.capgo.calendar.models.inputs

import android.provider.CalendarContract
import com.getcapacitor.PluginCall
import app.capgo.calendar.PluginError
import app.capgo.calendar.utils.ImplementationHelper

data class CreateCalendarInput(
    private val call: PluginCall,
) {
    val title = call.getString("title") ?: throw PluginError.TitleMissing
    val color = call.getString("color").let { ImplementationHelper.hexToColorInt(it) } ?: throw PluginError.ColorMissing
    val accountName = call.getString("accountName") ?: throw PluginError.AccountNameMissing
    val ownerAccount = call.getString("ownerAccount") ?: throw PluginError.OwnerAccountMissing
    val accountType = CalendarContract.ACCOUNT_TYPE_LOCAL
    val accessLevel = CalendarContract.Calendars.CAL_ACCESS_OWNER
    val allowedReminders = CalendarContract.Reminders.METHOD_ALERT
}
