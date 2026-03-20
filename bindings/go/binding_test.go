package tree_sitter_gon_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_gon "github.com/intangiblematter/tree-sitter-gon/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_gon.Language())
	if language == nil {
		t.Errorf("Error loading GON grammar")
	}
}
