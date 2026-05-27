package app.capgo.calendar.models.results

import com.getcapacitor.JSObject
import com.getcapacitor.PermissionState
import app.capgo.calendar.models.enums.CalendarPermissionScope
import app.capgo.calendar.models.templates.JSResult

data class CheckAllPermissionsResult(
    val permissionStates: Map<CalendarPermissionScope, PermissionState>,
) : JSResult {
    override fun toJSON(): JSObject {
        val result = JSObject()
        permissionStates.forEach { (scope, state) -> result.put(scope.value, state.toString()) }
        result.put("result", permissionStates)
        return result
    }
}
