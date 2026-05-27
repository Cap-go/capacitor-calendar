import XCTest
@testable import CapacitorCalendarPlugin

final class CapacitorCalendarTests: XCTestCase {
    func testPluginConfigMatchesPublicName() {
        XCTAssertEqual(PluginConfig.identifier, "CapacitorCalendarPlugin")
        XCTAssertEqual(PluginConfig.jsName, "CapacitorCalendar")
    }
}
