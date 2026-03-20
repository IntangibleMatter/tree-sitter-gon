import XCTest
import SwiftTreeSitter
import TreeSitterGon

final class TreeSitterGonTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_gon())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading GON grammar")
    }
}
