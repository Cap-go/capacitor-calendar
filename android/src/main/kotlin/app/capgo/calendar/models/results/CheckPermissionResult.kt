package app.capgo.calendar.models.results

import com.getcapacitor.JSObject
import com.getcapacitor.PermissionState
import app.capgo.calendar.models.templates.JSResult

data class CheckPermissionResult(
    val state: PermissionState,
) : JSResult {
    override fun toJSON(): JSObject {
        val result = JSObject()
        result.put("result", state.toString())
        return result
    }
}
